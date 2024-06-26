package com.hufs.ice_back.entity;


import com.hufs.ice_back.dto.request.SignUpRequestDto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Getter
@Table(name = "user")
public class UserEntity {
    @Id
    @Column(name = "user_email")
    private String email;

    @Column(name = "user_student_num")
    private String studentNum;

    @Column(name = "user_password")
    private String password;

    @Column(name = "user_name")
    private String name;

    public UserEntity(SignUpRequestDto dto) {
        this.email = dto.getEmail();
        this.studentNum = dto.getStudentNum();
        this.password = dto.getPassword();
        this.name = dto.getName();

    }

}

