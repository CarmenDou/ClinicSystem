package net.java.clinicsystem.repository;

import net.java.clinicsystem.model.Clinician;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicianRepository extends JpaRepository<Clinician, Long> {
    Clinician findByUserName(String username);
}
