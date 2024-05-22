package net.java.clinicsystem.controller;

import net.java.clinicsystem.model.Clinician;
import net.java.clinicsystem.repository.ClinicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class ClinicianController {
    @Autowired
    private ClinicianRepository clinicianRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Clinician clinicianData) {
        System.out.println(clinicianData);
        Clinician clinician = clinicianRepository.findByUserName(clinicianData.getUserName());
        if (clinician.getPassword().equals(clinicianData.getPassword())) {
            return ResponseEntity.ok(clinician);
        }
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }
}
