import { Box, Divider, Typography } from '@mui/material';

import COLOR from '../assets/styles/colors';
import TextCard from '../components/productpage/TextCard';
import { productObj } from '../utils/itemObj';

export default function ProductPage() {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '3rem',
      }}
    >
      <Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${COLOR.borderColor}`,
            paddingBottom: '2rem',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '2.2rem',
              mt: '-5px',
              '@media (max-width: 950px)': {
                width: '100%',
                textAlign: 'center',
              },
            }}
          >
            제품 소개
          </Typography>
          <Box
            sx={{
              lineHeight: 1.5,
              '@media (max-width: 950px)': {
                display: 'none',
              },
            }}
          >
            <Typography sx={{ color: '#757575' }}>
              PIPS 컴퓨터 성능진단 벤치마크 도구를 소개합니다.
            </Typography>
            <Typography sx={{ color: '#757575' }}>
              누구나 쉽고 빠르게 컴퓨터를 알 수 있는 날까지 노력하겠습니다.
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ padding: '60px 0px 40px 0px', fontWeight: 400 }}>
            <span style={{ color: COLOR.blue, fontSize: '2.4rem' }}>
              P I P S
            </span>{' '}
            <span style={{ fontSize: '1.5rem', color: '#757575' }}>
              ( Programmable IPC Performance & Sign )
            </span>
          </Typography>
          <Box sx={{ width: '100%', pb: '30px' }}>
            <Typography sx={{ fontSize: '1.125rem' }}>
              <span style={{ color: COLOR.blue }}>PIPS</span>는 사용자의
              컴퓨터를 간결하고 빠르게 진단하는 도구로써 컴퓨터의 CPU와 메모리의
              연산력을 측정하는 벤치마크 어플리케이션의 하나입니다.
            </Typography>
            <Divider
              sx={{
                mt: 2,
                '@media (max-width: 950px)': {
                  display: 'none',
                },
              }}
            />
          </Box>
          <Box>
            <Box sx={{ color: '#757575', lineHeight: 2 }}>
              <span style={{ color: COLOR.blue }}>PIPS</span>의 적용 대상은{' '}
              <span style={{ color: '#080', fontWeight: 700 }}>
                개인 컴퓨터(Personal Computer, PC)입니다.
              </span>{' '}
              현재는 Intel 계열과 AMD 계열의 프로세서를 채용한 컴퓨터를 대상으로
              하며, 보다 높은 등급 혹은 모바일 부문 CPU는 지원하지 않습니다.{' '}
            </Box>
            <Box sx={{ color: '#757575', lineHeight: 2.5, mt: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: COLOR.black,
                  }}
                >
                  PIPS-Freeware 사용방법
                </span>
              </Box>
              <span style={{ color: '#f89b00' }}>PIPS-Freeware</span>는 사용자가
              번거로운 과정 없이 컴퓨터를 진단하기 용이하도록 비-설치 사용자
              실행 형식의 벤치마크 도구입니다. 사용방법은 다음과 같습니다.
              <Box sx={{ marginLeft: '2rem' }}>
                <strong>1.</strong> 다운로드 받은 압축파일을 적당한 폴더에
                저장하세요. <br />
                <strong>2.</strong> 압축을 해제한 후 PIPS.exe 파일을 실행하세요.{' '}
                <br />
                <strong>3.</strong> 프로그램 상단에 있는 Benchmark를 클릭하세요.{' '}
                <br />
                <strong>4.</strong> 1분 정도의 시간이 경과하면, 같은 폴더에
                CVS파일이 생성됩니다.
                <br />
                <strong>5.</strong> 프로그램을 종료하세요. <br />
              </Box>
            </Box>
            <Box sx={{ color: '#757575', lineHeight: 2, mt: 2 }}>
              현재 버전의 결과는 CVS파일을 통해 확인할 수 있습니다. 총 5개의
              숫자로 구분되어 있으며, 왼쪽부터{' '}
              <strong style={{ color: COLOR.black }}>
                CPU속도, CPU온도, CPU이용률, 연산 명령어 수, 구간 가속 후 연산
                명령어 증가분입니다.
              </strong>{' '}
              제세한 사항은 자주 묻는 질문을 참고해주세요.
            </Box>
          </Box>
          <Divider sx={{ mt: 3 }} />
          <Box sx={{ color: '#757575', lineHeight: 2, mt: 2 }}>
            <Box sx={{ textAlign: 'center' }}>
              <span
                style={{
                  fontSize: '2rem',
                  fontWeight: 500,
                  color: COLOR.black,
                }}
              >
                PIPS-Freeware 기술정보
              </span>
            </Box>
            <Box sx={{ mt: 2 }}>
              <span style={{ color: '#f89b00' }}>PIPS-Freeware</span> 버전은
              여러분의 컴퓨터의 연산능력을 측정하는 것을 목적으로 합니다. 컴퓨터
              성능에는 그래픽 생산력, 병렬데이터 처리능력 등의 다양한 종류가
              있지만, 해당 버전은 컴퓨터의{' '}
              <strong style={{ color: COLOR.black }}>
                정수 연산, 부동소수점 연산, 해시코드 디코딩 연산능력
              </strong>{' '}
              측정을 합니다. 이를 위해 클럭당 명령어 처리 횟수 (Instructions per
              clock, IPC) 기법을 사용하며, 세계 표준 벤치마크 SPEC 기법을 응용한
              알고리즘이 적용되었습니다.
            </Box>
            <Box sx={{ mt: 2 }}>
              <span style={{ color: '#f89b00' }}>PIPS-Freeware</span>의 결과는
              코어 수효만큼 연산 스레드를 가동했을 때, 중앙 명령어 횟수를 클럭에
              맞춰 산출됩니다. 이는 CPU의 상대 평가를 의미하는 것으로 다른
              벤치마크 결과와 수평적 비교가{' '}
              <span style={{ color: 'red' }}>불가능</span>합니다.
            </Box>
          </Box>
          <Divider sx={{ mt: 3 }} />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '',
          display: 'flex',
          justifyContent: 'center',
          p: '40px 0px 40px 0px',
          marginTop: '4rem',
        }}
      >
        <Box
          sx={{
            width: '1200px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            placeItems: 'center',
            gap: 5,
            '@media screen and (max-width: 1200px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media screen and (max-width: 950px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          {productObj.map((item) => (
            <TextCard key={item.id} prodcutObj={item} />
          ))}
        </Box>
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Box
        sx={{
          width: '1200px',
          height: '400px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography sx={{ p: '30px 0px', fontWeight: 700, fontSize: '2rem' }}>
            문의사항
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: '1.125rem', mb: 4 }}>
            사용 중 버그가 발생하거나 “자주 묻는 질문”에서 해결하지 못한 문제가
            발생하면 아래 전자우편주소를 통해 바로 문의해주세요.
          </Typography>
          <Box
            sx={{
              width: '1200px',
              border: '1px solid #000000',
              p: '25px 0px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '1.7rem' }}>
              <strong>이메일 : </strong>
              <a
                href="mailto:soulphos22@gmail.com"
                style={{
                  color: '#000000',
                  fontSize: '1.7rem',
                  textDecoration: 'none',
                }}
              >
                soulphos22@gmail.com
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
