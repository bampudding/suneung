import Box from "@/components/box/box";
import Button from "@/components/button/button";
import Layout from "@/components/layout/layout";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div style={{
        fontSize: "24px",
        marginTop: "24px",
        fontWeight: "bold"
      }}>
        대학수학능력시험 국문 성적증명서
      </div>
      <div style={{
        borderTop: "2px solid #046aad",
        borderBottom: "1px solid #7e98bd",
        marginTop: "15px",
        marginBottom: "15px",
        width: "100%"
      }}>
        <table width="100%" style={{
          fontSize: "16px",
          textAlign: "center",
          lineHeight: "200%",
          width: "100%",
          height: "100%",
        }}>
          <thead>
            <tr>
              <th>NO</th>
              <th>응시 학년도</th>
              <th>시 험 명</th>
              <th>발급</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2025</td>
              <td>대학수학능력시험</td>
              <td><Button title="발급" href="/file/202511.pdf"/></td>
            </tr>
            <tr>
              <td>2</td>
              <td>2025</td>
              <td>9월 모의평가</td>
              <td><Button title="발급" href="/file/202509.pdf"/></td>
            </tr>
            <tr>
              <td>3</td>
              <td>2025</td>
              <td>6월 모의평가</td>
              <td><Button title="발급" href="/file/202506.pdf"/></td>
            </tr>

            <tr>
              <td>4</td>
              <td>2024</td>
              <td>대학수학능력시험</td>
              <td><Button title="발급" href="/file/202411.pdf"/></td>
            </tr>
            <tr>
              <td>5</td>
              <td>2024</td>
              <td>9월 모의평가</td>
              <td><Button title="발급" href="/file/202409.pdf"/></td>
            </tr>
            <tr>
              <td>6</td>
              <td>2024</td>
              <td>6월 모의평가</td>
              <td><Button title="발급" href="/file/202406.pdf"/></td>
            </tr>

            <tr>
              <td>7</td>
              <td>2023</td>
              <td>대학수학능력시험</td>
              <td><Button title="발급" href="/file/202311.pdf"/></td>
            </tr>
            <tr>
              <td>8</td>
              <td>2023</td>
              <td>9월 모의평가</td>
              <td><Button title="발급" href="/file/202309.pdf"/></td>
            </tr>
            <tr>
              <td>9</td>
              <td>2023</td>
              <td>6월 모의평가</td>
              <td><Button title="발급" href="/file/202306.pdf"/></td>
            </tr>

            <tr>
              <td>10</td>
              <td>2022</td>
              <td>대학수학능력시험</td>
              <td><Button title="발급" href="/file/202211.pdf"/></td>
            </tr>

            <tr>
              <td>11</td>
              <td>2021</td>
              <td>대학수학능력시험</td>
              <td><Button title="발급" href="/file/202111.pdf"/></td>
            </tr>

            <tr>
              <td>12</td>
              <td>2020</td>
              <td>대학수학능력시험</td>
              <td><Button title="발급" href="/file/202011.pdf"/></td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  )
}