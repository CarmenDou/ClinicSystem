package net.java.clinicsystem.controller;

import net.java.clinicsystem.dto.ParticipantAttackDTO;
import net.java.clinicsystem.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class ParticipantController {
    @Autowired
    private ParticipantService participantService;

    @GetMapping("/participant-list")
    public List<ParticipantAttackDTO> getAllParticipantAttacks(){
        return participantService.getAllParticipantAttacks();
    }


}
