package net.java.clinicsystem.repository;

import net.java.clinicsystem.model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {
}
