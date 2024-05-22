package net.java.clinicsystem.controller;

import net.java.clinicsystem.model.Attack;
import net.java.clinicsystem.model.Participant;
import net.java.clinicsystem.repository.AttackRepository;
import net.java.clinicsystem.service.AttackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8100"})
public class AttackController {
    @Autowired
    private AttackRepository attackRepository;

    @Autowired
    private AttackService attackService;

    @GetMapping("/attacks/{participantId}")
    public Page<Attack> getAttacksByParticipantId(@PathVariable Long participantId, Pageable pageable) {
        Page<Attack> attacks = attackRepository.findByParticipantIdOrderByAttackDateTime(participantId, pageable);
        //System.out.println(attacks.getTotalPages());
        return attackRepository.findByParticipantIdOrderByAttackDateTime(participantId, pageable);
    }

    @GetMapping("/attackReport/{participantId}")
    public List<Attack> getLastSevenDaysReports(@PathVariable Long participantId) {
        return attackService.getReportsForLastSevenDays(participantId);
    }

    @PostMapping("/attacks")
    public Attack createAttack(@RequestBody Attack attack){
        System.out.println(attack);
        return attackRepository.save(attack);
    }

    @GetMapping("/todayAttacks/{participantId}")
    public List<Attack> getTodayAttacks(@PathVariable Long participantId) {
        return attackService.getTodayAttacks(participantId);
    }

    @GetMapping("/getAttack/{attackId}")
    public List<Attack> getAttackById(@PathVariable Long attackId){
        return attackRepository.findByAttackId(attackId);
    }

    @PutMapping("attack/{attackId}")
    public ResponseEntity<Attack> updateAttack(@PathVariable Long attackId, @RequestBody Attack attack) {
        Attack updateAttack = attackRepository.save(attack);
        return ResponseEntity.ok(updateAttack);
    }

//    @PutMapping("/employees/{id}")
//    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
//        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Found"));
//        employee.setFirstName(employeeDetails.getFirstName());
//        employee.setLastName(employeeDetails.getLastName());
//        employee.setEmailId(employeeDetails.getEmailId());
//
//        Employee updatedEmployee = employeeRepository.save(employee);
//        return ResponseEntity.ok(updatedEmployee);
//    }

//    @GetMapping("/attacks")
//    public Attack createAttack(){
//        Participant participant = new Participant();
//        participant.setUserName("Yiming");
//        participant.setDeviceUuid("1234567890");
//        participantRepository.save(participant);
//        Attack attack = new Attack();
//        attack.setLocation("Pittburgh");
//        attack.setAttackDateTime(LocalDateTime.now());
//        attack.setParticipant(participant);
//        return attackRepository.save(attack);
//    }
}
