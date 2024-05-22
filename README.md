# ClinicSystem

## Introduction

The clinic system helps clinicians monitor a group of participants with Raynauds. Raynaud is a condition where certain body areas feel numb and cool in specific circumstances.

This system consists of three main components:

- a **Mobile Health app** that allows participants to record when and where their Raynauds attacks occur.
- a **RESTful backend** that is connected to a **database**. This backend sends, receives, and stores the data for all participants.
- a **Web Portal** for clinicians. This portal displays reports and analysis of the Raynauds records collected from the app.

## Implementation

### Technique and tools

- Angular + Ionic + Capacitor
- Spring Boot + Spring MVC + Spring Data JPA
- MySQL

### Features

- RESTful Backend(server + database)

  | Functions                                                    | Done or not |
  | ------------------------------------------------------------ | ----------- |
  | Save Profile of new participants                             | Y           |
  | Save Raynauds attack report records                          | Y           |
  | Save Profile of Clinician to let them login in the **Dashboard** | Y           |

- Web Portal

  | Functions                       | Done or not |
  | ------------------------------- | ----------- |
  | Login Page                      | Y           |
  | Patient List Page (a dashboard) | Y           |
  | Patient Detail Page             | Y           |

- App (**Keep updating**)

  | Functions                                        | Done or not |
  | ------------------------------------------------ | ----------- |
  | An identification for the participant (app user) | **N**       |
  | Report attack (Raynauds occurred) on a time      | Y           |
  | Raynauds daily report                            | **N**       |

## Overview

- RESTful Backend(server + database)

  - Example of backend

    ![backend](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/backend.jpg)

  - Tables

    ![databaseTable](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/databaseTable.jpg)

- Web Portal

  - Login Page

    - A Login page to verify the identification of the clinician by username and password

      ![login](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/Login.jpg)

  - Patient List Page (a dashboard)

    - A list of all participants currently using the app (registered in the study) in table with columns: username, alert (or not), last time of report (the latest reported record's time), respectively

    - In the "alert (or not)" column, clinicians should be notified if a participant has not reported attacks for more than 2 days before today. An alert, such as a highlighted icon, should be shown. The participant with the alert should be displayed first. The longer a participant goes without reporting, the higher their priority. For example, if participant A has not reported for the past 3 days and participant B has not reported for the past 2 days, A should be sorted above B.

      ![patientList](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/PatientList.jpg)

  - Patient Detail Page

    - Any participant in the list on dashboard can be selected to navigate to the participant's detail page

    - A table to show all Raynauds records in a time reverse manner (the latest record should be shown on the top). The columns of the table is "attack date", "attack time", "location". If there are more than 10 records for a patient, you need to make a pagination.

    - A **bar chart** to show the daily number of records for the **past seven days since TODAY**

      ![patientDetail](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/PatientDetail.jpg)

- App (**Keep updating**)

  - An identification for the participant (app user)

  - Report attack (Raynauds occurred) on a time (attacks may be reported MORE THAN ONCE in one day)

    - Add attack

      - A date input for attack date

      - A time input for attack time

      - date and time should be local time

      - A location question:"Are you in the room?" with answer options: "inside"/"outside" (participant can only choose one)

        ![addAttack](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/AddAttack.jpg)

        ![attackListAfterAdd](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/AttackListAfterAdd.jpg)

    - Edit attack

      - Update the record you already created within the day just in case you input the wrongly attack information.

        ![editAttack](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/EditAttack.jpg)

        ![attackListAfterEdit](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/AttackListAfterEdit.jpg)

    - List today's attacks

      - Show a list of the day's records in app till next day in case of editing (i.e. **in app**, at the beginning of the day the records should be empty. Reported records will retain till the end of the day (11:59 PM), and can be edited. On the second day (12:00 AM), the list should be refreshed.

        ![attack](https://github.com/CarmenDou/ClinicSystem/blob/master/demoImages/Attack.jpg)

  - Raynauds daily report

## Other

- Please watch the video to see more information details about this demo.

