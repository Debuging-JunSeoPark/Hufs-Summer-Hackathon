package com.hufs.ice_back.service;

import org.springframework.http.ResponseEntity;
import com.hufs.ice_back.dto.request.SignUpRequestDto;
import com.hufs.ice_back.dto.response.SignUpResponseDto;

public interface AuthService {

    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);


}

