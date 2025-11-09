# 쇼핑몰 프로젝트 배포 가이드

## 🚀 무료 배포 옵션

### 1. Vercel (가장 추천 ⭐)

**장점:**
- Next.js 제작사가 만든 플랫폼으로 최적화됨
- GitHub 연동으로 자동 배포
- 무료 플랜: 무제한 프로젝트, 100GB 대역폭
- 커스텀 도메인 지원

**배포 방법:**

#### 방법 A: Vercel CLI 사용
```bash
# 1. Vercel CLI 설치
npm install -g vercel

# 2. 프로젝트 폴더에서 로그인
cd C:\Users\WD\Desktop\cursorstudy\my-awesome-shoppingmall
vercel login

# 3. 배포
vercel

# 4. 프로덕션 배포
vercel --prod
```

#### 방법 B: GitHub 연동 (추천)
1. GitHub에 프로젝트 업로드
   - https://github.com 에서 새 저장소 생성
   - 프로젝트를 Git으로 초기화하고 푸시

2. Vercel 웹사이트에서 배포
   - https://vercel.com 접속
   - "Sign Up" → GitHub 계정으로 로그인
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - 자동으로 설정 감지 후 "Deploy" 클릭
   - 완료! 몇 분 후 배포 URL 제공

---

### 2. Netlify

**장점:**
- 무료 플랜 제공
- 간단한 드래그 앤 드롭 배포
- GitHub 연동 가능

**배포 방법:**
1. https://netlify.com 접속 및 회원가입
2. 프로젝트 빌드:
   ```bash
   npm run build
   ```
3. `.next` 폴더를 Netlify에 드래그 앤 드롭
   또는 GitHub 연동하여 자동 배포

---

### 3. Railway

**장점:**
- 무료 크레딧 제공 (월 $5)
- 데이터베이스 포함 가능
- 쉬운 설정

**배포 방법:**
1. https://railway.app 접속
2. GitHub 저장소 연결
3. 자동 배포 설정

---

### 4. Render

**장점:**
- 무료 플랜 제공
- 자동 SSL 인증서
- 쉬운 설정

**배포 방법:**
1. https://render.com 접속
2. "New Web Service" 선택
3. GitHub 저장소 연결
4. 빌드 명령: `npm install --legacy-peer-deps && npm run build`
5. 시작 명령: `npm start`

---

## 📝 배포 전 체크리스트

### 1. 환경 변수 확인
프로젝트에 필요한 환경 변수가 있다면 배포 플랫폼에 설정해야 합니다.

### 2. 빌드 테스트
```bash
npm install --legacy-peer-deps
npm run build
npm start
```

### 3. .gitignore 확인
`node_modules`, `.next` 등이 제외되어 있는지 확인

---

## 🎯 가장 쉬운 방법: Vercel + GitHub

1. **GitHub에 코드 업로드**
   ```bash
   cd C:\Users\WD\Desktop\cursorstudy\my-awesome-shoppingmall
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [YOUR_GITHUB_REPO_URL]
   git push -u origin main
   ```

2. **Vercel에서 배포**
   - https://vercel.com 접속
   - GitHub로 로그인
   - "Import Project" 클릭
   - 저장소 선택
   - 자동 감지된 설정 확인 후 "Deploy"
   - 완료! `https://your-project.vercel.app` URL 제공

---

## 💡 팁

- **커스텀 도메인**: Vercel, Netlify 모두 무료로 커스텀 도메인 연결 가능
- **자동 배포**: GitHub에 푸시할 때마다 자동으로 재배포됨
- **프리뷰 배포**: Pull Request마다 미리보기 URL 자동 생성

---

## ❓ 문제 해결

### 빌드 오류가 발생하면?
- `package.json`의 `build` 스크립트 확인
- 로컬에서 `npm run build` 테스트
- 배포 플랫폼의 빌드 로그 확인

### 환경 변수 설정
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment Variables

