package com.hufs.ice_back.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hufs.ice_back.dto.request.SignUpRequestDto;
import com.hufs.ice_back.dto.response.ResponseDto;
import com.hufs.ice_back.dto.response.SignUpResponseDto;
import com.hufs.ice_back.entity.UserEntity;
import com.hufs.ice_back.repository.UserRepository;
import com.hufs.ice_back.service.AuthService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImplement implements AuthService {

    private final UserRepository userRepository;
   
    // private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {
        try{

            String email = dto.getEmail(); //이메일 중복을 확인해주는 코드
            boolean existsByEmail = userRepository.existsByEmail(email);
            if (existsByEmail) return SignUpResponseDto.duplicateEmail();

            // String password = dto.getPassword(); //비밀번호를 암호화
            // String encodedPassword = passwordEncoder.encode(password);
            // dto.setPassword(Password);

            UserEntity userEntity = new UserEntity(dto); //dto데이터를 entity에 삽입
            System.out.println("정상");
            userRepository.save(userEntity); //entity를 repository를 통해 db에 저장

        } catch (Exception exception){
            exception.printStackTrace();
            return ResponseDto.databaseError();

        }

        return SignUpResponseDto.success();
    }
}
