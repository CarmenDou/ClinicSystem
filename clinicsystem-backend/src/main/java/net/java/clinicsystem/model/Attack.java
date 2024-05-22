package net.java.clinicsystem.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="attack")
public class Attack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attack_id")
    private long attackId;
    @Column(name = "attack_datetime")
    private LocalDateTime attackDateTime;
    private String location;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "participant_id")
    private Participant participant;

    public Attack(){}

    public Attack(LocalDateTime attackDateTime, String location, Participant participant) {
        super();
        this.attackDateTime = attackDateTime;
        this.location = location;
        this.participant = participant;
    }

    public long getAttackId() {
        return attackId;
    }

    public void setAttackId(long attackId) {
        this.attackId = attackId;
    }

    public LocalDateTime getAttackDateTime() {
        return attackDateTime;
    }

    public void setAttackDateTime(LocalDateTime attackDateTime) {
        this.attackDateTime = attackDateTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Participant getParticipant() {
        return participant;
    }

    public void setParticipant(Participant participant) {
        this.participant = participant;
    }
}
