# 🚀 Vercel 배포 완벽 가이드 (초보자용)

## 📋 준비물
- GitHub 계정 (없으면 https://github.com 에서 무료로 만들기)
- Vercel 계정 (GitHub로 자동 가입 가능)

---

## 1단계: GitHub에 코드 업로드하기

### 1-1. GitHub에서 새 저장소 만들기

1. **https://github.com** 접속
2. 오른쪽 상단 **"+"** 버튼 클릭 → **"New repository"** 선택
3. 저장소 이름 입력 (예: `my-shoppingmall`)
4. **"Public"** 선택 (무료로 사용 가능)
5. **"Initialize this repository with a README"** 체크 해제 (이미 파일이 있으므로)
6. **"Create repository"** 클릭

### 1-2. Git 설치 확인

Windows PowerShell 또는 명령 프롬프트에서:
```bash
git --version
```

**Git이 없다면?**
- https://git-scm.com/download/win 에서 다운로드
- 설치 후 컴퓨터 재시작

### 1-3. 프로젝트를 Git으로 초기화하고 업로드

**방법 1: 배치 파일 사용 (가장 쉬움)**

바탕화면에 있는 `GitHub-업로드.bat` 파일을 더블클릭하세요!

**방법 2: 수동으로 하기**

1. **PowerShell 또는 명령 프롬프트 열기**
   - Windows 키 + R
   - `powershell` 입력 후 Enter

2. **프로젝트 폴더로 이동**
   ```bash
   cd C:\Users\WD\Desktop\cursorstudy\my-awesome-shoppingmall
   ```

3. **Git 초기화**
   ```bash
   git init
   ```

4. **모든 파일 추가**
   ```bash
   git add .
   ```

5. **첫 커밋 만들기**
   ```bash
   git commit -m "첫 배포"
   ```

6. **GitHub 저장소 연결**
   ```bash
   git remote add origin https://github.com/[당신의GitHub아이디]/[저장소이름].git
   ```
   예: `git remote add origin https://github.com/yourname/my-shoppingmall.git`

7. **코드 업로드**
   ```bash
   git branch -M main
   git push -u origin main
   ```
   
   - GitHub 아이디와 비밀번호 입력 요청 시 입력
   - 비밀번호 대신 **Personal Access Token** 필요할 수 있음 (아래 참고)

**Personal Access Token 만들기 (비밀번호가 안 될 때)**
1. GitHub → 오른쪽 상단 프로필 → **Settings**
2. 왼쪽 메뉴에서 **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token (classic)**
5. Note: `vercel-deploy` 입력
6. **repo** 체크박스 선택
7. **Generate token** 클릭
8. 생성된 토큰 복사 (한 번만 보여줌!)
9. 비밀번호 입력할 때 이 토큰 붙여넣기

---

## 2단계: Vercel 계정 만들기

1. **https://vercel.com** 접속
2. **"Sign Up"** 클릭
3. **"Continue with GitHub"** 선택 (가장 쉬움)
4. GitHub 로그인 정보 입력
5. 권한 승인 클릭

---

## 3단계: Vercel에서 프로젝트 배포하기

### 3-1. 새 프로젝트 추가

1. Vercel 대시보드에서 **"Add New..."** → **"Project"** 클릭
2. **"Import Git Repository"** 섹션에서 방금 만든 GitHub 저장소 찾기
3. 저장소 옆의 **"Import"** 클릭

### 3-2. 프로젝트 설정

Vercel이 자동으로 Next.js 프로젝트를 감지합니다:

- **Framework Preset**: Next.js (자동 선택됨)
- **Root Directory**: `./` (그대로 두기)
- **Build Command**: `npm run build` (자동 설정됨)
- **Output Directory**: `.next` (자동 설정됨)
- **Install Command**: `npm install --legacy-peer-deps` (수정 필요!)

**중요: Install Command 수정하기**
- **"Override"** 클릭
- `npm install --legacy-peer-deps` 입력

### 3-3. 환경 변수 설정 (필요한 경우)

프로젝트에 환경 변수가 필요하면:
- **"Environment Variables"** 섹션에서 추가
- 지금은 건너뛰어도 됨

### 3-4. 배포 시작!

1. **"Deploy"** 버튼 클릭
2. 2-3분 정도 기다리기
3. ✅ **"Congratulations!"** 메시지가 나오면 성공!

---

## 4단계: 배포 확인하기

1. 배포 완료 후 **"Visit"** 버튼 클릭
2. 또는 제공된 URL로 접속 (예: `https://my-shoppingmall.vercel.app`)
3. 쇼핑몰이 정상적으로 보이면 성공! 🎉

---

## 5단계: 자동 배포 설정 (선택사항)

이제부터는:
- GitHub에 코드를 푸시하면 자동으로 재배포됨
- Pull Request마다 미리보기 URL 생성됨

**코드 수정 후 재배포:**
```bash
cd C:\Users\WD\Desktop\cursorstudy\my-awesome-shoppingmall
git add .
git commit -m "업데이트 내용"
git push
```
→ Vercel이 자동으로 새 버전 배포!

---

## ❓ 문제 해결

### Q1: "Build Failed" 오류가 나요
- Vercel 대시보드에서 **"Deployments"** → 실패한 배포 클릭
- **"Build Logs"** 확인
- 보통 `npm install --legacy-peer-deps` 설정 문제일 가능성 높음

### Q2: GitHub에 업로드가 안 돼요
- Git이 설치되어 있는지 확인: `git --version`
- GitHub 저장소 URL이 정확한지 확인
- Personal Access Token 사용 시 토큰이 올바른지 확인

### Q3: Vercel에서 저장소를 찾을 수 없어요
- GitHub 저장소가 **Public**인지 확인
- Vercel과 GitHub 계정이 연결되어 있는지 확인
- Vercel → Settings → Git → GitHub 연결 확인

### Q4: 배포는 되는데 페이지가 안 보여요
- 브라우저 캐시 삭제 후 다시 시도
- Vercel 대시보드에서 배포 상태 확인
- 빌드 로그에서 오류 확인

---

## 💡 유용한 팁

1. **커스텀 도메인**: Vercel → Project Settings → Domains에서 무료로 커스텀 도메인 연결 가능
2. **환경 변수**: 민감한 정보(API 키 등)는 Vercel의 Environment Variables에 저장
3. **미리보기**: Pull Request마다 자동으로 미리보기 URL 생성되어 테스트 가능

---

## 📞 도움이 더 필요하면

- Vercel 공식 문서: https://vercel.com/docs
- Vercel Discord 커뮤니티: https://vercel.com/discord

