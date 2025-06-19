'use client'

import Box from "@/components/box/box";
import Button from "@/components/button/button";
import Layout from "@/components/layout/layout";
import Image from "next/image";
import { useState } from "react";

export default function Page() {

  const [go, useGo] = useState(false)

  return (
    <div style={{display: "flex", gap: "16px"}}>
        <img style={{width: "480px", height: "auto"}} src="/images/img_certificate_process.png"/>

      <div style={{width: "100%"}}>

        <Box top={
          <>
            <span style={{fontSize: "14px", fontWeight: "bold"}}>증명서 선택</span>
            <div>
              <label>
                <input type="radio"/>
                국문
              </label>
              <label>
                <input type="radio"/>
                영문
              </label>
            </div>
          </>
        }>
          <div>
            <label style={{fontSize: "13px"}}>
              <input type="radio"/>
              공동/간편인증서 로그인
            </label>
            <label style={{fontSize: "13px"}}>
              <input type="radio"/>
              휴대폰 로그인
            </label>
          </div>

          <Box>
            <div style={{display: "flex", alignItems: "flex-end", gap: "16px"}}>
              <span style={{fontSize: "16px"}}>로그인</span>
              <span style={{fontSize: "12px"}}>※ 다른 사람의 주민등록번호를 부정하게 사용하는 경우 처벌 받습니다.(주민등록법 제37조)</span>
            </div>
            <Box grey>
            	<div style={{display: "flex", gap: "16px"}}>
                <span>전화번호</span>
                <div>
                  <input/>
                </div>
              </div>
              <div style={{display: "flex", gap: "16px"}}>
                <span>주민등록번호</span>
                <div>
                  <input/>
                  ~
                  <input/>
                </div>
              </div>
            </Box>
            <Button title="공동/간편인증서 로그인" onClick={() => useGo(true)}/>
            {go &&
              <div>
                <span style={{fontSize: "13px", paddingRight: "12px", fontWeight: "bold"}}>토스, 카카오 인증서를 확인하세요.</span>
                <Button title="인증 완료" href="/kice/issue/screCrtflssuView"/>
              </div>
            }
          </Box>

        </Box>
        

        
      </div>
    </div>
  );
}
