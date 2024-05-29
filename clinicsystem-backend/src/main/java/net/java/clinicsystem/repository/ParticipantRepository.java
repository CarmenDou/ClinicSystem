package net.java.clinicsystem.repository;

import net.java.clinicsystem.model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {
    List<Participant> findByDeviceUuid(String deviceUuid);
}
