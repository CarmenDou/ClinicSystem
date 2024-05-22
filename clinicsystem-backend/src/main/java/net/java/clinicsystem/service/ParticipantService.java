package net.java.clinicsystem.service;

import net.java.clinicsystem.dto.ParticipantAttackDTO;
import net.java.clinicsystem.model.Attack;
import net.java.clinicsystem.model.Participant;
import net.java.clinicsystem.repository.AttackRepository;
import net.java.clinicsystem.repository.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ParticipantService {
    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private AttackRepository attackRepository;

    public List<ParticipantAttackDTO> getAllParticipantAttacks() {
//        System.out.println("start");
        List<Participant> participants = participantRepository.findAll();
        List<ParticipantAttackDTO> participantAttackDTOs = new ArrayList<>();
        for (Participant participant : participants) {
//            System.out.println("participant");
            ParticipantAttackDTO participantAttackDTO = new ParticipantAttackDTO();
            participantAttackDTO.setParticipantId(participant.getParticipantId());
            participantAttackDTO.setUserName(participant.getUserName());
            participantAttackDTO.setLastReportTime(findLatestAttackTime(participant));
            participantAttackDTO.setAlert(checkAlert(participantAttackDTO.getLastReportTime()));
            participantAttackDTOs.add(participantAttackDTO);
        }
//        System.out.println("end");
        System.out.println(participantAttackDTOs);
        return participantAttackDTOs;
    }

    private LocalDateTime findLatestAttackTime(Participant participant) {
        Attack latestAttack = attackRepository.findFirstByParticipantOrderByAttackDateTimeDesc(participant);
        return (latestAttack != null) ? latestAttack.getAttackDateTime() : null;
    }

    private boolean checkAlert(LocalDateTime lastReportTime) {
        Duration duration = Duration.between(lastReportTime, LocalDateTime.now());
        long daysSinceLastReport = duration.toDays();

        return daysSinceLastReport >= 2;
    }
}
