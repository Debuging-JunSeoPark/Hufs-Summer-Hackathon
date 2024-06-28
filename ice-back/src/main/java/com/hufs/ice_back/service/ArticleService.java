package com.hufs.ice_back.service;

import org.springframework.http.ResponseEntity;

import com.hufs.ice_back.dto.request.PostArticleRequestDto;
import com.hufs.ice_back.dto.response.PostArticleResponseDto;

public interface ArticleService {

    ResponseEntity<? super PostArticleResponseDto> postArticle(PostArticleRequestDto dto, String email);
}