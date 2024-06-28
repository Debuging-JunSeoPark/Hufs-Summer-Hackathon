package com.hufs.ice_back.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hufs.ice_back.dto.request.PostArticleRequestDto;
import com.hufs.ice_back.service.ArticleService;
import com.hufs.ice_back.dto.response.PostArticleResponseDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/article")
public class ArticleController {

    private final ArticleService articleService;

    @PostMapping("")
    public ResponseEntity<? super PostArticleResponseDto> postArticle(
        @RequestBody @Valid PostArticleRequestDto requestBody,
        @AuthenticationPrincipal String email
    ){
        ResponseEntity<? super PostArticleResponseDto> response = articleService.postArticle(requestBody, email);
        return response;
    }

}

