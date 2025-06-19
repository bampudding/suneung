'use client'

import Box from "@/components/box/box";
import Button from "@/components/button/button";
import Layout from "@/components/layout/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {

  const [go, useGo] = useState(false)

  const [data0, setData0] = useState<number>()
  const onBlurHouseName0 = (event: any) => {
    setData0(event.target.value);
  };
  const [data1, setData1] = useState<number>()
  const onBlurHouseName = (event: any) => {
    setData1(event.target.value);
  };
  const [data2, setData2] = useState<number>()
  const onBlurHouseName2 = (event: any) => {
    setData2(event.target.value);
  };


  function Check() {
    if (data0 && data1 && data2) {
      useGo(true)
    } else {
      alert("정보를 모두 입력하십시오.")
    }
  }

  function Check2() {
    console.log(data2)
    if (data2 == 3066511) {
      window.open("/kice/issue/screCrtflssuView")
    } else {
      console.log(data2 == 3066511)
      alert("인증에 실패했습니다.")
    }
  }

  return (
    <div style={{display: "flex", gap: "16px"}}>
        <img style={{width: "480px", height: "auto"}} src="/images/img_certificate_process.png"/>

      <div style={{width: "100%"}}>

        <Box top={
          <>
            <span style={{fontSize: "14px", fontWeight: "bold"}}>증명서 선택</span>
            <div>
              <label>
                <input type="radio" name="lang" value={1} checked/>
                국문
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="lang" value={1} disabled/>
                영문 (점검중)
              </label>
            </div>
          </>
        }>
          <div>
            <label style={{fontSize: "13px"}}>
              <input type="radio" id="login" name="login" value={1}/>
              공동/간편인증서 로그인
            </label>
            <label style={{fontSize: "13px"}}>
              <input type="radio" id="login" name="login" value={2}/>
              휴대폰 로그인
            </label>
          </div>

          <Box>
            <div style={{display: "flex", alignItems: "flex-end", gap: "11px"}}>
              <span style={{fontSize: "16px", fontWeight: "bold"}}>로그인</span>
              <span style={{fontSize: "12px", opacity: .6}}>※ 다른 사람의 주민등록번호를 부정하게 사용하는 경우 처벌 받습니다.(주민등록법 제37조)</span>
            </div>
            <Box grey>
            	<div style={{display: "flex", gap: "16px"}}>
                <span>전화번호</span>
                <div>
                  <input style={{width: "96px", padding: "4px"}} onBlur={onBlurHouseName0}/>
                </div>
              </div>
              <div style={{display: "flex", gap: "16px"}}>
                <span>주민등록번호</span>
                <div style={{display: "flex", gap: "2px"}}>
                  <input style={{width: "56px", padding: "4px"}} onBlur={onBlurHouseName}/>
                  ~
                  <input type="password" style={{width: "64px", padding: "4px"}} onBlur={onBlurHouseName2}/>
                </div>
              </div>
            </Box>
            <Button title="공동/간편인증서 로그인" onClick={() => Check()}/>
            {go &&
              <div>
                <span style={{fontSize: "13px", paddingRight: "12px", fontWeight: "bold"}}>토스, 카카오, PASS 인증서 중 한 곳에 인증코드 312308 을(를) 입력하세요.</span>
                <Button title="인증 완료" onClick={Check2}/>
              </div>
            }
          </Box>

        </Box>
        

        
      </div>
    </div>
  );
}
