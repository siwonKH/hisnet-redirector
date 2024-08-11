# Hisnet Redirector

**Hisnet Redirector**는 히즈넷을 사용하며 로그인이 필요한 페이지에 접근할 때 발생하는 불편을 해결하기 위한 크롬 확장 프로그램입니다. 이 확장 프로그램은 사용자가 원래 접근하려던 히즈넷 페이지를 기억해 뒀다가, 로그인 완료 후 해당 페이지로 자동 이동시켜 줍니다.


크롬 웹 스토어: [Hisnet Redirector](https://chromewebstore.google.com/detail/hisnet-redirector/nomblfjgcjgmibkdopnpcndmommpklfh)


## 업데이트 내역

#### [v1.2] - 2024-08-11
- **버그 수정**: 기억할 필요 없는 팝업 페이지도 기억하는 오류 수정

#### [v1.1] - 2024-08-10
- **기능 추가**: 자동 이동을 위해 기억한 페이지가 1시간이 지나면 삭제되도록 함

#### [v1.0] - 2024-08-07
- **초기 릴리스**: Hisnet Redirector의 첫 번째 버전 출시.
- **기능 추가**: 사용자가 로그인 후 원래 접근하려던 페이지로 자동 이동하는 기능 구현.

## 소개

### 기존 문제

- **특정 페이지 접근 문제**: 다른 사람이 공유한 공지 링크를 클릭하여 접근하려 할 때, 로그인이 필요할 경우 로그인 후 원래 보려던 공지 화면이 아닌 홈 화면으로 이동하는 문제
- **세션 만료로 인한 문제**: 수강 현황과 같은 특정 페이지를 확인하는 도중 세션이 만료되어 다시 로그인해야 할 경우, 로그인 후 다시 원래 페이지로 돌아가는 것이 아니라 홈 화면으로 이동하는 문제

**Hisnet Redirector**는 이러한 불편함을 해결하기 위해 개발되었습니다.

### 기대 효과

- 히즈넷의 공지를 공지 번호가 아닌, 링크로 공유함으로써 공지 사항의 접근성을 높일 수 있다
- 세션이 만료되었을 때, 빠르게 원래 페이지로 돌아올 수 있다
