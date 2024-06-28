package com.hufs.ice_back.entity;

import java.time.LocalDateTime;

import javax.persistence.Column; //최근 버전에서는 import jakarta.persistence.~
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.hufs.ice_back.dto.request.PostArticleRequestDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Entity(name = "article")
@Table(name = "article")
public class ArticleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // DB가 id 자동 생성
    @Column(name = "article_num")
    private int articleNum;
    
    // 외래키 User 테이블의 컬럼명: email, 다대일 관계 설정.
    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "article_title")
    private String articleTitle;

    @Column(name = "article_content")
    private String articleContent;

    @Column(name = "credit")
    private String credit;

    @Column(name = "local")
    private String local;

    @Column(name = "time")
    private LocalDateTime time;

    @Column(name = "shortstop")
    private String shortstop;

    @Column(name = "first_base")
    private String firstBase;

    @Column(name = "catcher")
    private String catcher;

    @Column(name = "left_fielder")
    private String leftFielder;

    @Column(name = "center_fielder")
    private String centerFielder;

    @Column(name = "right_fielder")
    private String rightFielder;

    @Column(name = "pitcher")
    private String pitcher;

    @Column(name = "second_base")
    private String secondBase;

    @Column(name = "third_base")
    private String thirdBase;

    public ArticleEntity(PostArticleRequestDto dto, String email) {
        this.userEmail = email;
        this.articleTitle = dto.getArticleTitle();
        this.articleContent = dto.getArticleContent();
        this.credit = dto.getCredit();
        this.local = dto.getLocal();
        this.time = dto.getTime();
        this.shortstop = dto.getShortstop();
        this.firstBase = dto.getFirstBase();
        this.catcher = dto.getCatcher();
        this.leftFielder = dto.getLeftFielder();
        this.centerFielder = dto.getCenterFielder();
        this.rightFielder = dto.getRightFielder();
        this.pitcher = dto.getPitcher();
        this.secondBase = dto.getSecondBase();
        this.thirdBase = dto.getThirdBase();
    }
}
