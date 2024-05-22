package net.java.clinicsystem.model;

import jakarta.persistence.*;

@Entity
@Table(name = "participant")
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participant_id")
    private long participantId;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "device_uuid")
    private String deviceUuid;

    public Participant() {}

    public Participant(String userName, String deviceUuid) {
        super();
        this.userName = userName;
        this.deviceUuid = deviceUuid;
    }

    public long getParticipantId() {
        return participantId;
    }

    public void setParticipantId(long participantId) {
        this.participantId = participantId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDeviceUuid() {
        return deviceUuid;
    }

    public void setDeviceUuid(String deviceUuid) {
        this.deviceUuid = deviceUuid;
    }

    @Override
    public String toString() {
        return "Participant{" +
                "participantId=" + participantId +
                ", userName='" + userName + '\'' +
                ", deviceUuid='" + deviceUuid + '\'' +
                '}';
    }
}
