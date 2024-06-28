package com.hufs.ice_back.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hufs.ice_back.dto.request.SignUpRequestDto;
import com.hufs.ice_back.dto.response.SignUpResponseDto;
import com.hufs.ice_back.service.AuthService;



import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/sign-up")
    public ResponseEntity<? super SignUpResponseDto> signUp(@RequestBody @Valid SignUpRequestDto requestBody){
        log.info("This is an info message1");
        ResponseEntity<? super SignUpResponseDto> response = authService.signUp(requestBody);
        log.info("This is an info message");
    
        return response;
    }
}
