package net.java.clinicsystem;

import net.java.clinicsystem.model.Attack;
import net.java.clinicsystem.model.Participant;
import net.java.clinicsystem.repository.AttackRepository;
import net.java.clinicsystem.repository.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;

@SpringBootApplication
public class ClinicsystemBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClinicsystemBackendApplication.class, args);
    }

}

//test
//public class ClinicsystemBackendApplication implements CommandLineRunner {
//
//    public static void main(String[] args) {
//        SpringApplication.run(ClinicsystemBackendApplication.class, args);
//    }
//
//    @Autowired
//    private ParticipantRepository participantRepository;
//
//    @Autowired
//    private AttackRepository attackRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        Participant participant = new Participant();
//        participant.setUserName("Yiming");
//        participant.setDeviceUuid("1234567890");
//        participantRepository.save(participant);
//
//        Attack attack = new Attack();
//        attack.setLocation("Pittburgh");
//        attack.setAttackDateTime(LocalDateTime.now());
//        attack.setParticipant(participant);
//        attackRepository.save(attack);
//    }
//}

//orgin
//public class ClinicsystemBackendApplication {
//
//    public static void main(String[] args) {
//        SpringApplication.run(ClinicsystemBackendApplication.class, args);
//    }
//
//}

