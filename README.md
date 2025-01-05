# 🌟 **CalIT Frontend**

안녕하세요! 이 저장소는 **CalIT 프로젝트의 프론트엔드 부분**만 다루고 있습니다.  
**CalIT**는 개발자들이 더 효율적으로 일정과 스크럼을 관리할 수 있도록 설계된 플랫폼이에요.  
프로젝트의 전체 정보와 백엔드 관련 내용은 [**CalIT Main Repository**](https://github.com/beyond-sw-camp/be06-fin-MINIONZ-CalIT)에서 확인하실 수 있습니다.  
이 저장소는 [제가 포크한 버전](https://github.com/xeunnie/be06-fin-MINIONZ-CalIT)입니다.

---

## 📆 **배포 링크**
- [CalIT 바로가기](https://calit.netlify.app/) (Netlify 호스팅이며, 백엔드 구현은 되어있지 않습니다.)
- [화면 설계서 바로가기](https://www.figma.com/design/NjUfhUM8i0WHIc8xgVzAqa/CalIT-%ED%99%94%EB%A9%B4-%EC%84%A4%EA%B3%84%EC%84%9C?node-id=0-1&t=Jznz9LnBiv0uQT5N-1)

---

## ⚒️ **기술 스택**

이 프로젝트에서 사용된 기술 스택은 다음과 같습니다:

![Vue.js](https://img.shields.io/badge/Vue-181717?style=flat&logo=Vue.js&logoColor=4FC08D&color=white)
![TypeScript](https://img.shields.io/badge/TypeScript-181717?style=flat&logo=typescript&logoColor=3178C6&color=white)
![Axios](https://img.shields.io/badge/Axios-181717?style=flat&logo=axios&logoColor=5A29E4&color=white)
![Pinia](https://img.shields.io/badge/Pinia-181717?style=flat&logo=parsedotly&logoColor=FEDD00&color=white)
![Webpack](https://img.shields.io/badge/Webpack-181717?style=flat&logo=Webpack&logoColor=8DD6F9&color=white)

---

## 🌟 **프로젝트 개요**

**CalIT**는 캘린더와 IT를 결합한 서비스로,  
개발자들의 효율적인 일정 관리와 스크럼 관리에 도움을 주기 위해 설계된 플랫폼입니다.  
이 저장소는 프론트엔드 개발 관점에서 **일정 관리, 스크럼 보드, 실시간 소통 등 주요 기능**을 구현한 내용을 담고 있습니다.

---

## 🛠 **프론트엔드에서 제가 담당한 작업들**

### 1. **컴포넌트 기반 개발**
- Vue 3의 Composition API를 활용하여 재사용성과 유지보수성을 높이는 컴포넌트 구조를 설계했어요.
- 주요 기능인 **캘린더, 스크럼 보드, 실시간 채팅**을 독립적인 모듈로 나누어 구현했습니다.

### 2. **성능 최적화**
- **Lazy Loading**: Vue Router를 활용해 초기 로딩 속도를 개선했습니다.
- **Pinia 상태 관리**: 상태 관리 로직을 최적화하여 렌더링 성능을 향상시켰습니다.
- **Webpack 최적화**: Tree Shaking과 코드 스플리팅을 통해 번들 크기를 최소화했어요.
- **Axios 캐싱**: 자주 호출되는 API 응답을 캐싱하여 네트워크 요청을 줄였습니다.

### 3. **실시간 알람과 소통**
- WebSocket을 활용해 **실시간 채팅**과 알림 기능을 구현했습니다.
- 사용자 경험을 최우선으로 고려한 알람 UI/UX를 설계했습니다.

### 4. **반응형 디자인**
- **외부 라이브러리를 최소화**하고, **CSS와 JavaScript**만으로 반응형 레이아웃을 직접 구현했어요.
- **Media Queries**와 **Flexbox**를 사용해 다양한 디바이스에 최적화된 디자인을 설계했습니다.
- 모든 UI를 일관성 있게 유지하면서도 사용자 친화적인 경험을 제공하기 위해 노력했습니다.

### 5. **유틸리티 함수 직접 구현**
- 외부 라이브러리에 의존하지 않고, 프로젝트에서 필요한 **유틸리티 함수**를 직접 설계하고 작성했습니다.
    - **날짜와 시간 처리**: 일정 관리 기능을 위한 커스텀 날짜 포맷팅 및 계산 함수.
    - **데이터 유효성 검사**: 입력값 검증 및 오류 방지를 위한 로직.
    - **상태 관리 헬퍼**: Pinia와 통합된 상태 초기화 및 동기화 함수.
- 모든 유틸 함수는 재사용성을 고려해 모듈화했으며, 코드의 일관성을 높이는 데 기여했습니다.

---

## 👩‍💻 **제가 맡은 역할**

이 프로젝트에서 **디자인부터 프론트엔드 개발까지 전반**을 책임졌습니다.  
외부 라이브러리 사용을 최소화하고, 효율적인 로직과 구조를 직접 설계하여 최적화된 성능과 깔끔한 사용자 경험을 제공하는 데 집중했어요.  
특히, **유틸리티 함수와 커스텀 로직**을 통해 프로젝트를 더욱 간결하고 가벼운 형태로 완성했습니다.

---

## 🎯 **CalIT의 주요 목표와 기능**

**CalIT**는 개인 일정과 프로젝트 협업을 통합하여 개발자들이 효율적으로 협업할 수 있도록 돕는 플랫폼입니다.  
더 많은 기능과 자세한 내용은 [CalIT 메인 레포지토리](https://github.com/beyond-sw-camp/be06-fin-MINIONZ-CalIT)를 확인해주세요.

---

## 📂 **참고 자료**

- [Figma 디자인 파일](https://www.figma.com/design/NjUfhUM8i0WHIc8xgVzAqa/CalIT-%ED%99%94%EB%A9%B4-%EC%84%A4%EA%B3%84%EC%84%9C?node-id=0-1&t=Jznz9LnBiv0uQT5N-1)
- [CalIT Main Repository](https://github.com/beyond-sw-camp/be06-fin-MINIONZ-CalIT)
- [Frontend Repository (Fork)](https://github.com/xeunnie/be06-fin-MINIONZ-CalIT)
- [배포 링크](https://calit.netlify.app/)
- [마크업 리스트 확인하기](https://calit.netlify.app/markup)

---

## 💡 **기여 안내**

이 저장소는 CalIT의 프론트엔드 개발에 특화된 내용을 다루고 있습니다.  
**디자인과 개발 전반**을 직접 담당하며 얻은 경험을 바탕으로,  
이 프로젝트가 많은 개발자들에게 도움이 되기를 바랍니다. 😊

---

## 😊 **문의**

궁금한 점이나 제안하고 싶은 내용이 있다면 언제든지 연락주세요. 함께 더 나은 프로젝트를 만들어가고 싶습니다. 🙌