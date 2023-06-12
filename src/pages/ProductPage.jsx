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
            소개
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
              멀웨어 제로 악성코드 제거 도구를 소개합니다.
            </Typography>
            <Typography sx={{ color: '#757575' }}>
              악성코드로 인해 고통 받지 않는 세상을 만들기 위해 꾸준히
              노력하겠습니다.
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{
              fontSize: '2.2rem',
              padding: '60px 0px 40px 0px',
              fontWeight: 300,
            }}
          >
            멀웨어 제로 ( Malware Zero )
          </Typography>
          <Box sx={{ width: '88%', pb: '30px' }}>
            <Typography sx={{ fontSize: '1.125rem' }}>
              <span style={{ color: '#ff3c00' }}>멀웨어 제로</span>는 사용자의
              컴퓨터가 이미 악성코드에 감염되었을 때 유용하게 사용할 수 있는
              비설치 스크립트 형식의 보조 악성코드 제거 도구입니다.
            </Typography>
            <Divider
              sx={{
                mt: 1,
                '@media (max-width: 950px)': {
                  display: 'none',
                },
              }}
            />
          </Box>
          <Box>
            <Box sx={{ color: '#757575', lineHeight: 2 }}>
              멀웨어 제로는 네이버 보안 카페{' '}
              <span style={{ color: '#080', fontWeight: 700 }}>
                「바이러스 제로 : 시큐리티 커뮤니티」
              </span>{' '}
              에서 서비스 되던{' '}
              <span style={{ color: '#000000', fontWeight: 700 }}>
                멀웨어 제로 킷(Malware Zero Kit, MZK)
              </span>{' '}
              도구로, 사용자의 컴퓨터가 악성 광고 프로그램, 트로이 목마,
              악의적인 해킹 도구, 일부 바이러스 등의 악성코드가 감염되거나
              설치되어 피해를 입고 있을 때 사용하시는 안티바이러스 제품으로
              해결되지 않을 경우 신속하고 효과적으로 사용할 수 있는 비설치
              스크립트 형식의 커맨드 라인 기반 보조 악성코드 제거 도구입니다.
            </Box>
            <Box sx={{ color: '#757575', lineHeight: 2, mt: 2 }}>
              다만, 이 악성코드 제거 도구를 사용한다는 것은 이미 악성 프로그램이
              설치된, 즉 '
              <span style={{ color: '#000000', fontWeight: 700 }}>
                사후약방문
              </span>{' '}
              (일을 그르친 뒤에 아무리 뉘우쳐야 이미 늦음)'을 뜻하는 것이므로,
              최대한 도구가 사용되지 않도록 기본적인 보안 수칙을 지켜 악성코드
              및 악성 프로그램이 쉽게 설치되지 않도록 사전 예방에 만전을
              기해주시기를 당부드립니다.
            </Box>
            <Box sx={{ color: '#757575', lineHeight: 2, mt: 2 }}>
              본 도구는 공식 사이트 외 다른 사이트는 물론 카페, 블로그, 토렌트,
              커뮤니티, 소셜 네트워크 등에서 파일 직접 배포를 포함하여 코드 변형
              및 상업적 이용을 절대 금지합니다.
            </Box>
          </Box>
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
                href="mailto:test123@gmail.com"
                style={{
                  color: '#000000',
                  fontSize: '1.7rem',
                  textDecoration: 'none',
                }}
              >
                test123@gmail.com
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
