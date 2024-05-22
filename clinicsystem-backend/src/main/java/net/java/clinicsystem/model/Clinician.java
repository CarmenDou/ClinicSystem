package net.java.clinicsystem.model;

import jakarta.persistence.*;

@Entity
@Table(name = "clinician")
public class Clinician {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clinician_id")
    private long clinicianId;
    @Column(name = "user_name")
    private String userName;
    private String password;

    public Clinician() {}

    public Clinician(String userName, String password) {
        super();
        this.userName = userName;
        this.password = password;
    }

    public long getClinicianId() {
        return clinicianId;
    }

    public void setClinicianId(long clinicianId) {
        this.clinicianId = clinicianId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
