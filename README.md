# Getting Projects Done

> **Getting Projects Done(GPD)** 는 애플리케이션 서비스 출시 전 UI, 기능 등 프로젝트 최종 점검사항에 대한 체크업 모듈 서비스입니다. <br>
> 각 메뉴에 제공된 점검 항목에 대해 O,X로 체크할 수 있으며, X(No) 항목은 자동으로 프로젝트 보드에 추가되어 효율적으로 수정 작업을 관리할 수 있습니다.

## Plannig & Design
- **(기획)** 개발자, 디자이너, PM, QA 등 다양한 팀원이 하나의 프로젝트에서 각자의 작업 상태를 확인하고 업데이트할 수 있도록 체계적인 협업 모듈을 기획했습니다.
  - 기존에는 주로 스프레드시트를 활용해 정보를 공유했지만, 더 효율적인 협업을 위해 이를 대체할 단일 모듈이 필요하다고 판단했습니다.
  - 프로젝트 진행 상황을 실시간으로 확인하고, 놓친 부분을 신속하게 보완해, 한 흐름 내에서 체크업과 작업 보드가 통합되는 시스템을 목표로 합니다.
- **(디자인)** `Figma`를 사용해 심플하면서도 직관적인 UI를 구현했습니다.
  - 각 페이지의 엔트리(entry), 메인보드(mainboard) 등 주요 화면별로 필요한 컴포넌트를 설계해 사용자가 쉽게 접근하고 이해할 수 있는 인터페이스를 시도했습니다.
<img width="500" src="https://github.com/user-attachments/assets/ce491208-a9ed-467c-99c8-d937cbeb0f4f">

## DataBase
- **데이터베이스 설계** SQLite3를 사용하여 프로젝트 데이터베이스를 구축했습니다.
- User 정보 및 Project 마스터 데이터의 저장 및 조회, 수정을 간편하게 처리할 수 있도록 설계했습니다.
<img width="500" src="https://github.com/user-attachments/assets/367e5784-b4e0-4616-9800-e8243fd45028">

## Structure
- **(모노레포 구성)** 프로젝트는 모노레포 구조로 설계하여, 하나의 저장소 안에서 서버와 클라이언트 코드를 함께 관리할 수 있도록 했습니다.
  - 이를 통해 코드베이스의 일관성을 유지하고, 서버와 클라이언트 간의 협업 및 의존성 관리를 간소화했습니다.
- **(패키지 관리)** Yarn을 사용하여 패키지를 관리하였으며, 특히 Yarn Berry(버전 3.5.1)를 통해 효율적인 워크스페이스 관리를 구현했습니다.
  - 이를 통해 중복되는 패키지를 줄이고, 각 모듈(server/client)의 의존성을 효과적으로 관리할 수 있었습니다.
```
server/ - GraphQL 서버
client/ - React 앱
```

### Server
- Nest.js
- TypeORM
- Apollo Server
- passport, bcrypt (for Auth, Login)
  
```bash
src/
  auth/, project/, register/ ... - 서비스 도메인별 하위 디렉토리로 구성
    - resolver 
    - service
    - module 
    - repository
  entities/ - 데이터베이스 테이블의 구조 및 필드 정의 객체
  schema/ - graphql schema 
  types/ - 타입 정의
  app.module.ts
  main.ts  
...
gpd.db - sqlite databse 파일
package.json
...
```

### client
- Apollo Client
- React(Vite)
- Typescript
- styled-components
- Recoil
  
```bash
src/
    assets/ - 이미지, 아이콘 등 리소스
    graphql/ - API 통신에 필요한 graphql 파일
    components/ - 공통 컴포넌트
    hooks/ - custom hooks
    pages/ - 도메인 별 페이지 구성 (entry, login, gpdBoard..)
    types/ - 타입 정의
    utils/ - 유틸리티 함수 모음
    App.tsx
    main.tsx
    globalStyle.ts
```

## Getting started

**Install yarn packages**

```bash
yarn install
```

**Start dev server**

```bash
yarn workspace server start:dev
```
- Access the default <http://localhost:4000>

**Start dev client**

```bash
yarn workspace client dev
```
- Access the default <http://localhost:4173>
  
## Progress
- [x] 프로젝트 기획 및 디자인
- [x] 데이터베이스 구축 및 프로젝트 연동
- [x] entity 및 도메인 별 API 구축
- [x] 로그인 및 인증(JWT) 서버 로직 구현, 클라이언트 연동
- [x] 프로젝트 등록(entry) 서버 및 클라이언트
- [ ] 수정 폼 생성 및 등록 (진행중) 
