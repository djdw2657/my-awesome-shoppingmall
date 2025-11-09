# GitHub 업로드 가이드

## 저장소 주소
**https://github.com/djdw2657/my-awesome-shoppingmall**

---

## 방법 1: 배치 파일 사용 (가장 쉬움) ⭐

바탕화면에 있는 `GitHub-업로드.bat` 파일을 더블클릭하세요!

---

## 방법 2: 수동으로 하기

### 1단계: PowerShell 또는 명령 프롬프트 열기

- **Windows 키 + R** 누르기
- `powershell` 입력 후 Enter

### 2단계: 프로젝트 폴더로 이동

```bash
cd C:\Users\WD\Desktop\cursorstudy\my-awesome-shoppingmall
```

### 3단계: Git 초기화 (처음 한 번만)

```bash
git init
```

### 4단계: 모든 파일 추가

```bash
git add .
```

### 5단계: 커밋 만들기

```bash
git commit -m "첫 업로드"
```

### 6단계: GitHub 저장소 연결

```bash
git remote add origin https://github.com/djdw2657/my-awesome-shoppingmall.git
```

### 7단계: GitHub에 업로드

```bash
git branch -M main
git push -u origin main
```

**중요:** 
- GitHub 아이디와 비밀번호 입력 요청 시:
  - 아이디: `djdw2657`
  - 비밀번호: GitHub 비밀번호 또는 **Personal Access Token** 사용

---

## Personal Access Token 만들기 (비밀번호가 안 될 때)

1. **https://github.com** 접속
2. 오른쪽 상단 프로필 클릭 → **Settings**
3. 왼쪽 메뉴에서 **Developer settings** 클릭
4. **Personal access tokens** → **Tokens (classic)** 클릭
5. **Generate new token (classic)** 클릭
6. **Note**: `vercel-deploy` 입력
7. **Expiration**: 원하는 기간 선택 (예: 90 days)
8. **Select scopes**: **repo** 체크박스 선택
9. 맨 아래 **Generate token** 클릭
10. 생성된 토큰 복사 (한 번만 보여줌! 잃어버리면 다시 만들어야 함)
11. 비밀번호 입력할 때 이 토큰을 붙여넣기

---

## 업로드 후 확인

1. **https://github.com/djdw2657/my-awesome-shoppingmall** 접속
2. 파일들이 보이면 성공! ✅

---

## 다음 단계: Vercel 배포

GitHub 업로드가 완료되면:

1. **https://vercel.com** 접속
2. GitHub로 로그인
3. **"Add New Project"** 클릭
4. **my-awesome-shoppingmall** 저장소 선택
5. **Install Command**에 `npm install --legacy-peer-deps` 입력
6. **Deploy** 클릭!

---

## 문제 해결

### Q: "fatal: not a git repository" 오류
→ `git init` 명령어를 먼저 실행하세요.

### Q: "remote origin already exists" 오류
→ 다음 명령어로 기존 연결 제거 후 다시 시도:
```bash
git remote remove origin
git remote add origin https://github.com/djdw2657/my-awesome-shoppingmall.git
```

### Q: "Authentication failed" 오류
→ Personal Access Token을 사용하세요 (위 가이드 참고)

### Q: "nothing to commit" 메시지
→ 이미 모든 파일이 커밋되어 있습니다. 바로 `git push` 실행하세요.

