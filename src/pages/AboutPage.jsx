import { Box, Divider, Typography } from '@mui/material';

import COLOR from '../assets/styles/colors';

export default function AboutPage() {
  return (
    <Box>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '3rem' }}>
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
            기업 소개
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
              솔포스는 인공지능의 위험성을 경고하고, 대처할 수 있는 방안을
              제시합니다.
            </Typography>
            <Typography sx={{ color: '#757575' }}>
              언제나 열린 기업으로 여러분과 함께합니다.
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{
              fontSize: '2.2rem',
              padding: '60px 0px 40px 0px',
              fontWeight: 500,
            }}
          >
            <span style={{ color: COLOR.blue }}>AI</span>, 두려움의 대상에서
            새로운 기회로, <span style={{ color: COLOR.blue }}>솔포스</span>와
            함께
          </Typography>
          <Box sx={{ width: '100%', pb: '30px' }}>
            <Typography sx={{ fontSize: '1.125rem' }}>
              <span
                style={{
                  color: COLOR.blue,
                  fontSize: '1.5rem',
                  fontWeight: '500',
                }}
              >
                솔포스
              </span>
              는 컴퓨터를 정확하게 진단하기 위해 다년간{' '}
              <strong>컴퓨터 & 반도체 검증 솔루션</strong>을 개발하여
              대응했습니다. 오늘 날에는 인간형 AI 시대의 도래에 대응하기 위한
              방안을 개발하면서, 동시에 AI에게 예속되거나 자승자박의 위험을
              경고했습니다. 솔포스는 이런 위험에 대처할 수 있는 방안을 우선
              글로써 전달하고자 합니다.
            </Typography>
            <Divider
              sx={{
                mt: 1,
                '@media -width: 950px)': {
                  display: 'none',
                },
              }}
            />
          </Box>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <span
              style={{
                color: '#1b3478',
                fontWeight: 500,
                fontSize: '1.4rem',
              }}
            >
              AI는 기존의 컴퓨터와 무엇이 다른가요?
            </span>
          </Box>
          <Box>
            <Box sx={{ color: '#757575', lineHeight: 2 }}>
              <strong style={{ color: COLOR.blue }}>
                AI, 로봇, 드론, 자율주행 자동차
              </strong>
              는 인간과 유사한 상황 인지능력과 자율적 행동을 합니다. 그러나
              행동방식은 인간과 상이하며 사고와 의식 또한 인간과는 괴리감이
              있습니다. 그렇기에 우리에게 불편하고 위험한 상황을
              자아냅니다.&nbsp;
              <span style={{ color: '#080', fontWeight: 700 }}>
                AI는 2진법 논리를 기반으로 지능
              </span>
              을 구성하기에 존재적 한계가 있습니다. 또한 타고나기를 인간과 달리
              가족, 공동체, 관습, 윤리의 순화 과정을 거치지 않았기 때문입니다.
              그럼에도 AI는 인간의 논리와 어법을 모방하는 것이기에 우리로서
              대처하기에 어렵습니다.{' '}
              <span style={{ color: COLOR.black, fontWeight: 700 }}>
                <br />
                <br />
                그럼에도
              </span>{' '}
              AI가 수리, 논리, 사실 판단, 환경과 정황 판단 등의 지능적인 부분은
              문명에 큰 기여를 하는 것은 사실입니다. 해당 분야에서는 인간 능력을
              압도하기에 그 이용가치는 더없이 크다는 말이 자주 나옵니다.
              <br />
              <Divider sx={{ mt: 2 }} />
              <br />
            </Box>
            <Box sx={{ color: '#757575', lineHeight: 2, mb: 2 }}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <span
                  style={{
                    color: '#1b3478',
                    fontWeight: 500,
                    fontSize: '1.4rem',
                  }}
                >
                  솔포스는 AI 기술을 적절히 다루는 방안을 다음과 같이
                  제시합니다.
                </span>
              </Box>
              <span
                style={{
                  color: COLOR.black,
                  fontSize: '1.25rem',
                  fontWeight: 500,
                }}
              >
                가동 에너지 판정법
              </span>{' '}
              <br />
              <span style={{ color: 'red' }}>위험</span>하다는 이유만으로
              무조건적인 배척은 기술 발전의 한계를 가속할 뿐입니다. 솔포스는
              가동 에너지 판정법으로 AI 컴퓨터의 존재를 문명에 조화시키는 방안을
              제시합니다.
            </Box>
            <Box sx={{ color: '#757575', lineHeight: 2, mb: 2 }}>
              <span
                style={{
                  color: COLOR.black,
                  fontSize: '1.25rem',
                  fontWeight: 500,
                }}
              >
                한계가동률 인가 시뮬레이터
              </span>{' '}
              <br />
              <span style={{ color: 'green' }}>품질검증</span>은 모든 분야에
              필수 요소입니다. 좋은 품질의 AI 컴퓨터는 월등한 성능을 보여줄
              것입니다. 솔포스는 한계가동률 인가 시뮬레이터를 공급하여, AI
              컴퓨터가 항상 최고의 성능을 발휘하도록 도움을 제시합니다.
            </Box>
            <Box sx={{ color: '#757575', lineHeight: 2 }}>
              <span
                style={{
                  color: COLOR.black,
                  fontSize: '1.25rem',
                  fontWeight: 500,
                }}
              >
                구간 가동률 조정기법
              </span>{' '}
              <br />
              <span style={{ color: COLOR.blue }}>제조 공정, 유지보수</span>는
              장치의 정상적인 기능에 큰 기여를 합니다. 솔포스는 구간 가동률
              조정기법을 제공하여, AI 컴퓨터에 장착된 장치소자가 정상적인 기능을
              유지하도록 도움을 제시합니다.
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box sx={{ color: '#757575', lineHeight: 2, mt: 5 }}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <span
                  style={{
                    color: '#1b3478',
                    fontWeight: 500,
                    fontSize: '1.4rem',
                  }}
                >
                  컴퓨터를 사랑하는 모두에게 드리는 당부의 말씀
                </span>
              </Box>
              <span>
                <span
                  style={{
                    color: COLOR.blue,
                    fontSize: '1.5rem',
                    fontWeight: '500',
                  }}
                >
                  솔포스
                </span>
                는 AI 세계가 무엇인지, 우리 사회에 AI가 주는 혜택은 무엇인지를
                담백하게 담아보았습니다. 저희가 당부 드리고 싶은 것은 오직{' '}
                <strong style={{ color: COLOR.blue }}>한 가지</strong> 입니다.
              </span>
              <br />
              <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                <span
                  style={{
                    color: COLOR.black,
                    fontWeight: 500,
                    fontSize: '2rem',
                  }}
                >
                  “컴퓨터를 이로운 기계로 사용하던 것에서{' '}
                  <strong style={{ fontSize: '2.5rem', color: '#f89b00' }}>
                    한 걸음
                  </strong>{' '}
                  더 나아가는 것”
                </span>
              </Box>
              <span>
                컴퓨터는 2진법 기계가 나름대로 생각과 판단을 하여 행동한다는
                사실은 확실합니다. 이 능력만 볼 것이 아니라, 기계의 심성과 본성
                그리고 물질적 행동양식을 늘 염두에 두면서 기계를 활용하는
                것입니다. 솔포스는 AI 컴퓨터를 적절히 통제하고, 가동 에너지를
                감시하여 우리 사회에 동반자로 조화시키는데 최선을 다하겠습니다.
              </span>
              <br />
              <br />
              <span style={{ color: COLOR.black, fontWeight: 500 }}>
                솔포스 대표 김창선 올림
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '3rem',
          height: '400px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: '2rem', mb: 2 }}>
            문의하기
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: '1.125rem', mb: 4 }}>
            솔포스에 대한 문의사항이 있으시면 언제든지 연락주세요.
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
