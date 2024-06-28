package com.hufs.ice_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hufs.ice_back.entity.ArticleEntity;

@Repository
public interface ArticleRepository extends JpaRepository<ArticleEntity, Integer> {
    
    boolean existsByArticleNum(Integer articleNum); // 정확한 필드 이름을 사용
    ArticleEntity findByArticleNum(Integer articleNum);   // 정확한 필드 이름을 사용
    

}
