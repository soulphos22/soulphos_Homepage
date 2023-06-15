// Homepage Image Import
import mainContent01 from '../assets/images/main_content_1.png';
import mainContent02 from '../assets/images/main_content_2.png';
import mainContent03 from '../assets/images/main_content_3.png';

// Product Image Import
import productImage01 from '../assets/images/productImage01.png';
import productImage04 from '../assets/images/productImage04.png';
import productImage05 from '../assets/images/productImage05.png';

export const itemObj = [
  {
    id: 1,
    mainText: '1분, 스트레칭 한번하고 오세요',
    subText: '컴퓨터 벤치마크를 한번 하기위해 적잖은 시간을 할애하시나요?',
    subText2: '1분이면 끝납니다! PIPS는 스트레칭 시간동안 실행이 완료됩니다.',
    subText3: '귀하의 소중한 시간을 위해 저희는 계속 노력하고 있습니다.',
    image: mainContent01,
  },
  {
    id: 2,
    mainText: '실제 사용 환경에서 벤치마크가 가능합니다',
    subText:
      '업무 프로그램, 게임, 오피스, 서버? 문제없습니다. 모두 켜놓은 상태로 사용하세요.',
    subText2:
      'PIPS는 Windows의 백그라운드 리소스를 계산하여 자동으로 실행강도를 조절합니다.',
    subText3:
      '실제 사용 환경이나 앞으로 사용할 환경을 미리 파악하기위해 시뮬레이터처럼 사용하세요.',
    image: mainContent03,
  },
  {
    id: 3,
    mainText: '원-클릭, 원-프로그램으로 바로 실행하세요',
    subText:
      '벤치마크 한번 하기위해 회원가입하고, 프로그램 설치하고, 사용방법 검색하시나요?',
    subText2:
      '그리고 이용률, 온도, 속도는 별도의 모니터링 프로그램을 사용하시지는 않나요?',
    subText3:
      'PIPS는 자동문입니다! 단 한번의 클릭으로 번거로운 작업없이 한번에 결과까지 확인하세요.',
    image: mainContent02,
  },
];

export const faqObj = [
  {
    panelId: 'panel1',
    question: 'Q. 문제가 발생했거나 궁금한 점이 있으신가요?',
    answer:
      "예기치 않은 문제가 발생했거나 다른 궁금한 점이 있으시면 '자주 묻는 질문' 페이지를 방문해 내용을 확인해주세요.",
    image: '',
  },
  {
    panelId: 'panel2',
    question: 'Q. 문제가 해결되지 않으셨나요?',
    answer:
      '문제가 해결되지 않으셨다면 고객센터로 문의해주세요. 고객센터는 24시간 운영되며, 최대한 빠르게 답변해드리겠습니다.',
    image: '',
  },
  {
    panelId: 'panel3',
    question: 'Q. 멀웨어 제로를 사용해주셔서 감사합니다.',
    answer:
      '멀웨어 제로를 사용해주셔서 감사합니다. 멀웨어 제로는 사용자의 편의를 위해 노력하고 있습니다.',
    image: '',
  },
];

export const productObj = [
  {
    id: 1,
    imageText: '다양한 적용범위',
    hoverText: '다양한 적용범위',
    hoverSubText: '본질이 컴퓨터인 모든 개체에 필요합니다.',
    hoverSubText2: 'AI, 로봇, 자율주행 자동차, 드론 등',
    hoverSubText3: 'PIPS의 적용범위는 엄청납니다.',
    image: productImage05,
  },
  {
    id: 2,
    imageText: '컴퓨터 바이탈',
    hoverText: '컴퓨터 바이탈',
    hoverSubText: '인간의 체온, 맥박, 호흡, 혈압과 같이',
    hoverSubText2: '이용률, 온도, 속도 등의 컴퓨터 바이탈을',
    hoverSubText3: 'PIPS로 한 번에 확인하세요.',
    image: productImage04,
  },
  {
    id: 3,
    imageText: '단계별 구간가속',
    hoverText: '단계별 구간가속',
    hoverSubText: '최대가속만으로는 한계가 있습니다.',
    hoverSubText2: '구간별 성능진단으로 컴퓨터를 정확하게',
    hoverSubText3: 'PIPS를 시뮬레이터처럼 사용하세요.',
    image: productImage01,
  },
];
