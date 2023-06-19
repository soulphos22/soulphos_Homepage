// Homepage Image Import
import mainContent01 from '../assets/images/main_content_1.png';
import mainContent02 from '../assets/images/main_content_2.png';
import mainContent03 from '../assets/images/main_content_3.png';

// Product Image Import
import productImage01 from '../assets/images/productImage01.png';
import productImage04 from '../assets/images/productImage04.png';
import productImage05 from '../assets/images/productImage05.png';

// FAQ Image Import
import faqContent01 from '../assets/images/faqcontent01.png';
import faqContent02 from '../assets/images/faqcontent02.png';
import faqContent03 from '../assets/images/faqcontent03.png';
import faqContent04 from '../assets/images/faqcontent04.png';
import faqContent05 from '../assets/images/faqcontent05.png';

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
    question: 'Q. PIPS 컴퓨터 성능진단 도구를 사용하는 방법을 알려주세요.',
    answer: '',
    image: faqContent01,
  },
  {
    panelId: 'panel2',
    question: 'Q. 다운로드가 차단됩니다.',
    answer: `브라우저 보안으로 인해 다운로드가 차단되는 경우가 발생할 경우, 아래 이미지와 같이 조치하시면 정상적으로 다운로드가 가능합니다. (Google Chrome기준)

    다운로드 파일은 내부에 실행 파일(exe)를 포함하고 있기 때문에 해당 이슈가 발생할 수 있습니다.`,
    image: faqContent05,
  },
  {
    panelId: 'panel3',
    question: 'Q. 중간에 프로그램을 종료해도 되나요?',
    answer:
      '네 중간에 프로그램을 종료하셔도 문제없습니다. 종료 이후 모든 작업이 바로 가능합니다.',
    image: '',
  },
  {
    panelId: 'panel4',
    question: 'Q. 언제 프로그램을 종료하면 되나요?',
    answer:
      'PIPS가 실행되고 약 3분 후 같은 폴더에 CVS파일이 생성되며 실행이 멈춥니다. 파일 생성을 확인하시고, 프로그램을 종료하시면 됩니다.',
    image: faqContent02,
  },
  {
    panelId: 'panel5',
    question: 'Q. CVS파일을 확인하고 싶어요.',
    answer: '',
    image: faqContent03,
  },
  {
    panelId: 'panel6',
    question: 'Q. CVS파일의 내용이 무엇인가요?',
    answer: '',
    image: faqContent04,
  },
  {
    panelId: 'panel7',
    question: 'Q. 윈도우 작업관리자의 CPU이용률과 PIPS의 CPU이용률이 달라요.',
    answer: `PIPS 컴퓨터 성능진단 도구는 본격적인 실행 전에 백그라운드 리소스를 계산하여 연산 투입량을 결정합니다. 해당 투입량을 기준으로 사용할 CPU코어 개수를 결정합니다. 결정된 코어 개수에 연산을 투입하여 성능진단을 합니다.
      
    그렇기에 PIPS는 현재 연산을 투입한 코어에 대한 이용률이 나타나며, Windows 작업 관리자의 경우 모든 CPU코어에 대한 이용률을 나타냅니다.
      
    따라서 두 이용률은 수평적인 비교가 불가능합니다.`,
    image: '',
  },
  {
    panelId: 'panel8',
    question: 'Q. 스마트폰에서는 사용할 수 없나요?',
    answer: `네. 사용할 수 없습니다. 아쉽게도 현재 PIPS 컴퓨터 성능진단 도구는 PC에서 동작하도록 설계되어 있습니다.
    스마트폰에서 동작하도록 개발이 된다면, 공지하도록 하겠습니다.
    
    감사합니다.`,
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
