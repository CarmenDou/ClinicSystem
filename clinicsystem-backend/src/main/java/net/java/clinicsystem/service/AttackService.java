package net.java.clinicsystem.service;

import net.java.clinicsystem.model.Attack;
import net.java.clinicsystem.repository.AttackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.session.RedisSessionProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AttackService {
    @Autowired
    private AttackRepository attackRepository;

    public List<Attack> getReportsForLastSevenDays(Long participantId){
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime sevenDaysAgo = now.minusDays(7);
        return attackRepository.findByParticipantIdAndAttackDateTime(participantId, sevenDaysAgo, now);
    }

    public List<Attack> getTodayAttacks(Long participantId){
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime oneDaysAgo = now.minusDays(1);
        return attackRepository.findByParticipantIdAndAttackDateTime(participantId, oneDaysAgo, now);
    }
}
