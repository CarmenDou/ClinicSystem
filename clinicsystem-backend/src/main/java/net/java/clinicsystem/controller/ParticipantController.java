package net.java.clinicsystem.controller;

import net.java.clinicsystem.dto.ParticipantAttackDTO;
import net.java.clinicsystem.model.Attack;
import net.java.clinicsystem.model.Participant;
import net.java.clinicsystem.repository.ParticipantRepository;
import net.java.clinicsystem.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8100"})
public class ParticipantController {
    @Autowired
    private ParticipantService participantService;
    @Autowired
    private ParticipantRepository participantRepository;

    @GetMapping("/participant-list")
    public List<ParticipantAttackDTO> getAllParticipantAttacks(){
        return participantService.getAllParticipantAttacks();
    }

    @PostMapping("/participant")
    public Participant createParticipant(@RequestBody Participant participant){
        System.out.println(participant);
        return participantRepository.save(participant);
    }

    @GetMapping("/getParticipantByUuid/{deviceUuid}")
    public List<Participant> getParticipantByUuid(@PathVariable String deviceUuid){
        return participantRepository.findByDeviceUuid(deviceUuid);
    }
}
