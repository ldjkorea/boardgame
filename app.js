// 카테고리 대분류 및 세부분류 정의
const CATEGORY_MAP = {
  "보드게임": ["전략", "파티", "자유"],
  "특수활동": ["머미", "크씬", "방탈", "클밍"],
  "모임활동": ["수다", "회식", "축제"]
};

// 세부분류별 대표 이모지 엠블럼 매핑
const SUB_CAT_EMOJI = {
  "전략": "♟️",
  "파티": "🎲",
  "자유": "🔄",
  "머미": "🧙",
  "크씬": "🕵️",
  "방탈": "🚪",
  "클밍": "🧗",
  "수다": "💬",
  "회식": "🍻",
  "축제": "🎪"
};

// 사진 기반 모임 일정 정의
const DEFAULT_EVENTS = [
  {
    id: "evt-02",
    title: "자유벙",
    datetime: "2026-07-02T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["배우진", "서재원", "김진수", "길시온", "이동준"],
    status: "completed",
    code: "1002",
    mainCategory: "보드게임",
    subCategory: "자유"
  },
  {
    id: "evt-03",
    title: "회식벙",
    datetime: "2026-07-03T20:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["배우진", "김민준", "고양은", "길시온", "이동준"],
    status: "completed",
    code: "1003",
    mainCategory: "모임활동",
    subCategory: "회식"
  },
  {
    id: "evt-04",
    title: "자유벙",
    datetime: "2026-07-04T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["서재원", "김진수", "배우진"],
    status: "completed",
    code: "1004",
    mainCategory: "보드게임",
    subCategory: "자유"
  },
  {
    id: "evt-05",
    title: "자유벙",
    datetime: "2026-07-05T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["길시온", "배우진", "이동준"],
    status: "completed",
    code: "1005",
    mainCategory: "보드게임",
    subCategory: "자유"
  },
  {
    id: "evt-07",
    title: "머미벙",
    datetime: "2026-07-07T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["배우진", "서재원"], 
    status: "ongoing",
    code: "7707",
    mainCategory: "특수활동",
    subCategory: "머미"
  },
  {
    id: "evt-09",
    title: "자유벙",
    datetime: "2026-07-09T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7709",
    mainCategory: "보드게임",
    subCategory: "자유"
  },
  {
    id: "evt-10",
    title: "회식2벙",
    datetime: "2026-07-10T20:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7710",
    mainCategory: "모임활동",
    subCategory: "회식"
  },
  {
    id: "evt-11",
    title: "파티/철도벙",
    datetime: "2026-07-11T14:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7711",
    mainCategory: "보드게임",
    subCategory: "파티"
  },
  {
    id: "evt-12",
    title: "클라이밍",
    datetime: "2026-07-12T13:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7712",
    mainCategory: "특수활동",
    subCategory: "클밍"
  },
  {
    id: "evt-14",
    title: "돌아온3D벙",
    datetime: "2026-07-14T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7714",
    mainCategory: "보드게임",
    subCategory: "전략"
  },
  {
    id: "evt-16",
    title: "페스타1",
    datetime: "2026-07-16T11:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7716",
    mainCategory: "모임활동",
    subCategory: "축제"
  },
  {
    id: "evt-17",
    title: "페스타2",
    datetime: "2026-07-17T11:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7717",
    mainCategory: "모임활동",
    subCategory: "축제"
  },
  {
    id: "evt-18",
    title: "홍수벙/강릉MT",
    datetime: "2026-07-18T09:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7718",
    mainCategory: "모임활동",
    subCategory: "축제"
  },
  {
    id: "evt-19",
    title: "강릉MT",
    datetime: "2026-07-19T09:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7719",
    mainCategory: "모임활동",
    subCategory: "축제"
  },
  {
    id: "evt-21",
    title: "장보기",
    datetime: "2026-07-21T18:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7721",
    mainCategory: "모임활동",
    subCategory: "수다"
  },
  {
    id: "evt-26",
    title: "생일파티벙",
    datetime: "2026-07-26T18:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7726",
    mainCategory: "모임활동",
    subCategory: "수다"
  }
];

// 회원 명부 데이터 정의
const DEFAULT_MEMBERS = [
  { name: "길시온", pw: "1111", role: "🔴 관리자", rate: 92, count: 149, date: "25.05.19", intro: "O", chat: "O", monthly: [9, 12, 16, 11, 13, 7], allHistory: [7, 12, 16, 11, 13, 9, 10, 14, 13, 13, 10, 8, 4, 7], pass5Count: 3, freePassCount: 1, monthlyPassExpiry: "2026-08-31" },
  { name: "이동준", pw: "1111", role: "🔴 관리자", rate: 75, count: 29, date: "25.11.17", intro: "O", chat: "O", monthly: [3, 4, 1, 5, 6, 1], allHistory: [1, 6, 5, 1, 4, 3, 1, 5, 3, 0, 0, 0, 0, 0], pass5Count: 5, freePassCount: 0, monthlyPassExpiry: "" },
  { name: "배우진", pw: "1111", role: "🌱 일반계원", rate: 68, count: 21, date: "26.07.07", intro: "O", chat: "O", monthly: [2, 3, 4, 5, 5, 2], allHistory: [2, 5, 5, 5, 4, 3, 2, 0, 0, 0, 0, 0, 0, 0], pass5Count: 2, freePassCount: 0, monthlyPassExpiry: "" },
  { name: "서재원", pw: "1111", role: "🌱 일반계원", rate: 54, count: 16, date: "26.07.07", intro: "O", chat: "O", monthly: [1, 2, 3, 4, 4, 2], allHistory: [2, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0], pass5Count: 0, freePassCount: 1, monthlyPassExpiry: "" },
  { name: "김진수", pw: "1111", role: "🌱 일반계원", rate: 48, count: 12, date: "26.07.07", intro: "O", chat: "O", monthly: [1, 1, 2, 3, 3, 2], allHistory: [2, 3, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0], pass5Count: 4, freePassCount: 0, monthlyPassExpiry: "" },
  { name: "김민준", pw: "1111", role: "🌱 일반계원", rate: 35, count: 8, date: "26.07.07", intro: "O", chat: "X", monthly: [0, 1, 1, 2, 3, 1], allHistory: [1, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], pass5Count: 1, freePassCount: 0, monthlyPassExpiry: "" },
  { name: "고양은", pw: "1111", role: "🌱 일반계원", rate: 20, count: 4, date: "26.07.07", intro: "X", chat: "X", monthly: [0, 0, 1, 1, 1, 1], allHistory: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], pass5Count: 0, freePassCount: 0, monthlyPassExpiry: "" }
];

let state = {
  isAdmin: true,
  events: [],
  members: [],
  currentUser: null,
  activeTab: "home",
  filterMainCategory: "all",
  filterSubCategory: "all"
};

function initForceSync() {
  const cachedMembers = localStorage.getItem('boardgye_members');
  let needReset = false;

  if (cachedMembers) {
    try {
      const parsed = JSON.parse(cachedMembers);
      const dongjunMember = parsed.find(m => m.name === "이동준");
      if (!dongjunMember || dongjunMember.date !== "25.11.17" || dongjunMember.count !== 29) {
        needReset = true;
      }
    } catch(e) {
      needReset = true;
    }
  } else {
    needReset = true;
  }

  if (needReset) {
    console.log("명예의 전당 실명 계원 적용을 위해 캐시 스토리지를 강제 갱신합니다.");
    localStorage.clear();
  }
}

function loadData() {
  const events = localStorage.getItem('boardgye_events');
  const members = localStorage.getItem('boardgye_members');
  const isAdmin = localStorage.getItem('boardgye_isAdmin');

  state.events = events ? JSON.parse(events) : [...DEFAULT_EVENTS];
  state.members = members ? JSON.parse(members) : [...DEFAULT_MEMBERS];
  state.isAdmin = isAdmin ? JSON.parse(isAdmin) : true;
}

function saveData() {
  localStorage.setItem('boardgye_events', JSON.stringify(state.events));
  localStorage.setItem('boardgye_members', JSON.stringify(state.members));
  localStorage.setItem('boardgye_isAdmin', JSON.stringify(state.isAdmin));
}

function checkLoginSession() {
  const sessionUser = sessionStorage.getItem('boardgye_session_user');
  if (sessionUser) {
    state.currentUser = sessionUser;
    const userProfile = state.members.find(m => m.name === sessionUser);
    if (userProfile) {
      state.isAdmin = (
        userProfile.role.includes("관리자") || 
        userProfile.role.includes("운영진") || 
        userProfile.role.includes("문지기")
      );
    }
    
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-app-wrapper').style.display = 'flex';
    document.getElementById('header-user-welcome').textContent = `${state.currentUser}님`;
    
    saveData();
    renderApp();
  } else {
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('main-app-wrapper').style.display = 'none';
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('login-name').value.trim();
  const pw = document.getElementById('login-password').value.trim();

  if (state.members.length === 0) {
    state.members = [...DEFAULT_MEMBERS];
  }

  const user = state.members.find(m => m.name === name);
  if (user) {
    if (user.pw === pw) {
      sessionStorage.setItem('boardgye_session_user', user.name);
      showToast(`${user.name}님, 환영합니다! 🎉`);
      checkLoginSession();
    } else {
      showToast("비밀번호가 맞지 않습니다. (초기: 1111)", false);
    }
  } else {
    showToast("동호회 명부에 등록되지 않은 이름입니다.", false);
  }
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const pw = document.getElementById('reg-password').value.trim();

  if (state.members.some(m => m.name === name)) {
    showToast("이미 동호회에 등록된 동일한 이름이 존재합니다.", false);
    return;
  }

  const now = new Date();
  const year = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const formattedDate = `${year}.${month}.${date}`;

  const newMember = {
    name: name,
    pw: pw,
    role: "🌱 일반계원",
    rate: 0,
    count: 0,
    date: formattedDate,
    intro: "X",
    chat: "X",
    monthly: [0, 0, 0, 0, 0, 0],
    allHistory: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    pass5Count: 0,
    freePassCount: 0,
    monthlyPassExpiry: ""
  };

  state.members.push(newMember);
  saveData();

  sessionStorage.setItem('boardgye_session_user', name);
  showToast("보드계모임 가입을 환영합니다! 🎉");
  
  document.getElementById('register-form').reset();
  document.getElementById('card-register-view').style.display = 'none';
  document.getElementById('card-login-view').style.display = 'block';

  checkLoginSession();
}

function handleLogout() {
  sessionStorage.removeItem('boardgye_session_user');
  state.currentUser = null;
  checkLoginSession();
  showToast("로그아웃 되었습니다.");
}

function initTabs() {
  const navSelectors = ['.sidebar-item', '.mobile-nav-item'];

  navSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(item => {
      item.addEventListener('click', () => {
        const tabName = item.getAttribute('data-tab');
        state.activeTab = tabName;

        navSelectors.forEach(sel => {
          document.querySelectorAll(sel).forEach(el => {
            if (el.getAttribute('data-tab') === tabName) {
              el.classList.add('active');
            } else {
              el.classList.remove('active');
            }
          });
        });

        const tabPanes = document.querySelectorAll('.tab-pane');
        tabPanes.forEach(p => p.classList.remove('active'));

        const targetPane = document.getElementById(`tab-${tabName}`);
        if (targetPane) targetPane.classList.add('active');

        renderApp();
      });
    });
  });
}

function initRoleToggle() {
  const toggleBtn = document.getElementById('role-toggle');
  
  function updateToggleUI() {
    if (state.isAdmin) {
      toggleBtn.textContent = '운영진 모드';
      toggleBtn.classList.add('admin');
    } else {
      toggleBtn.textContent = '일반회원 모드';
      toggleBtn.classList.remove('admin');
    }
  }

  toggleBtn.addEventListener('click', () => {
    state.isAdmin = !state.isAdmin;
    updateToggleUI();
    saveData();
    renderApp();
  });

  updateToggleUI();
}

function initPassCodeInputEvents() {
  const inputs = document.querySelectorAll('.pass-code-input');
  if (inputs.length === 0) return;

  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
}

function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.background = isSuccess ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
  
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2500);
}

function renderHomePass() {
  const passContainer = document.getElementById('home-pass-container');
  const activeEvent = state.events.find(e => e.status === 'ongoing');

  if (!activeEvent) {
    passContainer.innerHTML = `
      <div class="glass-card" style="text-align: center; color: var(--text-muted); padding: 32px 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; color: var(--border-color);"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <p style="font-size: 14px; font-weight: 500;">현재 출석체크가 진행 중인 모임이 없습니다.</p>
        <p style="font-size: 11px; margin-top: 4px;">운영진이 모임을 시작하면 출석패스가 여기에 활성화됩니다.</p>
      </div>
    `;
    return;
  }

  const isAttended = activeEvent.participants.includes(state.currentUser);

  if (isAttended) {
    passContainer.innerHTML = `
      <div class="attendance-pass-card" style="border-color: rgba(16, 185, 129, 0.35); background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(8, 9, 13, 0.4) 100%), var(--panel-bg);">
        <div class="pass-header">
          <span style="font-size: 12px; font-weight: 700; color: var(--accent-green); letter-spacing: 0.5px;">ATTENDANCE COMPLETE</span>
          <span class="pass-badge" style="background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.4); color: #34d399;">출석 완료</span>
        </div>
        <div class="pass-body">
          <h4 class="pass-title">${activeEvent.title}</h4>
          <p style="font-size: 12px; color: var(--text-muted);">
             오늘 모임 출석이 정상 처리되었습니다. 남은 시간 보드게임을 재밌게 즐기세요! 🎲
          </p>
        </div>
      </div>
    `;
  } else {
    passContainer.innerHTML = `
      <div class="attendance-pass-card">
        <div class="pass-header">
          <span style="font-size: 12px; font-weight: 700; color: var(--primary-color); letter-spacing: 0.5px;">ONGOING MOIM PASS</span>
          <span class="pass-badge">출석체크 진행중</span>
        </div>
        <div class="pass-body">
          <div>
            <h4 class="pass-title">${activeEvent.title}</h4>
            <span class="section-subtitle" style="display: block; margin-top: 2px;">장소: ${activeEvent.location}</span>
          </div>

          <div class="pass-input-row">
            <div class="pass-code-inputs">
              <input type="text" maxlength="1" class="pass-code-input" pattern="[0-9]" inputmode="numeric">
              <input type="text" maxlength="1" class="pass-code-input" pattern="[0-9]" inputmode="numeric">
              <input type="text" maxlength="1" class="pass-code-input" pattern="[0-9]" inputmode="numeric">
              <input type="text" maxlength="1" class="pass-code-input" pattern="[0-9]" inputmode="numeric">
            </div>
            <button class="btn" style="flex: 1; padding: 14px 12px;" onclick="handlePassAttendance('${activeEvent.id}')">
              출석하기
            </button>
          </div>
          
          ${state.isAdmin ? `<div style="font-size: 11px; color: var(--primary-color); text-align: right; margin-top: 4px;">운영진 출석 힌트 코드: <strong>${activeEvent.code}</strong></div>` : ''}
        </div>
      </div>
    `;
    
    initPassCodeInputEvents();
  }
}

window.handlePassAttendance = function(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  const inputs = document.querySelectorAll('.pass-code-input');
  let enteredCode = '';
  inputs.forEach(input => enteredCode += input.value.trim());

  if (enteredCode === event.code) {
    if (!event.participants.includes(state.currentUser)) {
      event.participants.push(state.currentUser);
    }
    
    const myProfile = state.members.find(m => m.name === state.currentUser);
    let deductionMessage = "출석이 완료되었습니다!";

    if (myProfile) {
      myProfile.count += 1;
      myProfile.rate = Math.min(100, Math.round(myProfile.rate + 1));

      // 1순위: MONTHLY PASS
      let hasValidMonthly = false;
      if (myProfile.monthlyPassExpiry) {
        const expiryDate = new Date(myProfile.monthlyPassExpiry);
        const today = new Date();
        today.setHours(0,0,0,0);
        if (expiryDate >= today) {
          hasValidMonthly = true;
        }
      }

      if (hasValidMonthly) {
        deductionMessage = `무제한 입장권 (MONTHLY PASS) 적용으로 프리패스 출석 완료! 👑`;
      } 
      // 2순위: WEEKLY PASS
      else if (myProfile.pass5Count && myProfile.pass5Count > 0) {
        myProfile.pass5Count -= 1;
        deductionMessage = `5일 실속 패스 (WEEKLY PASS) 1회 차감 완료! (남은 횟수: ${myProfile.pass5Count}회) 🎟️`;
      } 
      // 3순위: 이벤트 무료증정권
      else if (myProfile.freePassCount && myProfile.freePassCount > 0) {
        myProfile.freePassCount -= 1;
        deductionMessage = `이벤트 무료증정권 1회 차감 완료! (남은 횟수: ${myProfile.freePassCount}회) 🎁`;
      } 
      // 4순위: 일반
      else {
        deductionMessage = `보유 패스 없음: 현장 결제 대상입니다. (DAY PASS 9k / 15k won) 💳`;
      }
    }

    saveData();
    renderApp();
    showToast(deductionMessage);
  } else {
    showToast("출석 코드가 틀렸습니다. 다시 확인해 주세요.", false);
    inputs.forEach(input => input.value = '');
    inputs[0].focus();
  }
};

// [운영진 전용] 관리 모달 활성화
window.openMemberProfile = function(memberName) {
  const member = state.members.find(m => m.name === memberName);
  if (!member) return;

  const modal = document.getElementById('member-profile-modal');
  const modalBody = document.getElementById('member-modal-body');

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 16px;">
      <div class="avatar" style="width: 56px; height: 56px; font-size: 18px; background: var(--primary-glow); margin: 0; font-weight: 800;">
        ${member.name.charAt(0)}
      </div>
      <div>
        <h4 style="font-size: 18px; font-weight: 800;">${member.name}</h4>
        <span style="font-size: 11px; color: var(--primary-color); font-weight: 700; background: rgba(167, 139, 250, 0.1); padding: 2px 8px; border-radius: 99px; border: 1px solid rgba(167, 139, 250, 0.2);">
          ${member.role}
        </span>
      </div>
    </div>

    <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
      <span style="font-size: 13px; font-weight: 700; color: var(--primary-color); display: block; margin-bottom: 8px;">보유 패스 내역</span>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; margin-bottom: 6px;">
        <div style="background: rgba(255,255,255,0.02); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">5일 패스 (WEEKLY)</span>
          <strong style="color: var(--accent-green);">${member.pass5Count || 0}회</strong>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">무료증정권</span>
          <strong style="color: var(--secondary-color);">${member.freePassCount || 0}회</strong>
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.02); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 11px; display: flex; justify-content: space-between;">
        <span style="color: var(--text-muted);">무제한 입장권 (MONTHLY) 만료일</span>
        <strong>${member.monthlyPassExpiry ? member.monthlyPassExpiry : "미사용"}</strong>
      </div>
    </div>

    <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
      <span style="font-size: 13px; font-weight: 700; color: var(--primary-color); display: block; margin-bottom: 8px;">기본 정보</span>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px;">
        <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-muted);">이름</span><span>${member.name}</span></div>
        <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-muted);">가입일</span><span>${member.date}</span></div>
      </div>
    </div>
  `;

  document.getElementById('edit-member-target-name').value = member.name;
  document.getElementById('edit-member-role-select').value = member.role;
  document.getElementById('edit-member-intro-chk').checked = (member.intro === 'O');
  document.getElementById('edit-member-chat-chk').checked = (member.chat === 'O');

  document.getElementById('edit-pass-5-input').value = member.pass5Count || 0;
  document.getElementById('edit-pass-free-input').value = member.freePassCount || 0;
  document.getElementById('edit-pass-expiry-input').value = member.monthlyPassExpiry || "";

  modal.classList.add('active');
};

// [신규] 계원 상호간 프로필 세부 정보 및 그래프 조회기 모달
window.openMemberProfileView = function(memberName) {
  const member = state.members.find(m => m.name === memberName);
  if (!member) return;

  const modal = document.getElementById('member-view-modal');
  const modalBody = document.getElementById('member-view-modal-body');

  let expiryText = "미사용";
  if (member.monthlyPassExpiry) {
    const exp = new Date(member.monthlyPassExpiry);
    const today = new Date();
    today.setHours(0,0,0,0);
    expiryText = exp >= today ? `${member.monthlyPassExpiry} (이용가능 👑)` : "기간 만료";
  }

  // 월별 내역 리스트 마크업
  const monthLabels = [
    "26년 7월", "26년 6월", "26년 5월", "26년 4월", "26년 3월", "26년 2월", 
    "26년 1월", "25년 12월", "25년 11월", "25년 10월"
  ];
  const historyListHTML = monthLabels.map((label, idx) => {
    const countVal = member.allHistory[idx] !== undefined ? member.allHistory[idx] : 0;
    return `
      <div class="history-row" style="padding: 8px 12px; font-size: 12px;">
        <span>${label}</span>
        <strong style="color: var(--primary-color);">${countVal}회</strong>
      </div>
    `;
  }).join('');

  modalBody.innerHTML = `
    <!-- 인적 정보 -->
    <div style="display: flex; align-items: center; gap: 16px;">
      <div class="avatar" style="width: 56px; height: 56px; font-size: 18px; background: var(--primary-glow); margin: 0; font-weight: 800;">
        ${member.name.slice(-2)}
      </div>
      <div>
        <h4 style="font-size: 18px; font-weight: 800;">${member.name} 계원</h4>
        <span style="font-size: 11px; color: var(--primary-color); font-weight: 700; background: rgba(167, 139, 250, 0.1); padding: 2px 8px; border-radius: 99px; border: 1px solid rgba(167, 139, 250, 0.2);">
          ${member.role}
        </span>
      </div>
    </div>

    <!-- 보유 스펙 패스 내역 -->
    <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
      <span style="font-size: 13px; font-weight: 700; color: var(--primary-color); display: block; margin-bottom: 8px;">보유 패스 내역</span>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; margin-bottom: 6px;">
        <div style="background: rgba(255,255,255,0.02); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">5일 패스 (WEEKLY)</span>
          <strong style="color: var(--accent-green);">${member.pass5Count || 0}회</strong>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">무료증정권</span>
          <strong style="color: var(--secondary-color);">${member.freePassCount || 0}회</strong>
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.02); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 11px; display: flex; justify-content: space-between;">
        <span style="color: var(--text-muted);">무제한 입장권 만료일</span>
        <strong>${expiryText}</strong>
      </div>
    </div>

    <!-- 최근 6개월 추이 그래프 -->
    <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
      <span style="font-size: 13px; font-weight: 700; color: var(--primary-color); display: block; margin-bottom: 2px;">참석율 그래프</span>
      <div class="chart-container" style="height: 150px;">
        <div class="chart-y-axis">
          <span>8</span>
          <span>4</span>
          <span>0</span>
        </div>
        <div class="chart-bars-wrapper">
          <div class="chart-bar-item">
            <div class="chart-bar-fill" style="--bar-val: ${member.monthly[0] * 1.6}; width: 14px;" data-val="${member.monthly[0]}"></div>
            <span style="font-size: 9px; color: var(--text-muted);">2월</span>
          </div>
          <div class="chart-bar-item">
            <div class="chart-bar-fill" style="--bar-val: ${member.monthly[1] * 1.6}; width: 14px;" data-val="${member.monthly[1]}"></div>
            <span style="font-size: 9px; color: var(--text-muted);">3월</span>
          </div>
          <div class="chart-bar-item">
            <div class="chart-bar-fill" style="--bar-val: ${member.monthly[2] * 1.6}; width: 14px;" data-val="${member.monthly[2]}"></div>
            <span style="font-size: 9px; color: var(--text-muted);">4월</span>
          </div>
          <div class="chart-bar-item">
            <div class="chart-bar-fill" style="--bar-val: ${member.monthly[3] * 1.6}; width: 14px;" data-val="${member.monthly[3]}"></div>
            <span style="font-size: 9px; color: var(--text-muted);">5월</span>
          </div>
          <div class="chart-bar-item">
            <div class="chart-bar-fill" style="--bar-val: ${member.monthly[4] * 1.6}; width: 14px;" data-val="${member.monthly[4]}"></div>
            <span style="font-size: 9px; color: var(--text-muted);">6월</span>
          </div>
          <div class="chart-bar-item">
            <div class="chart-bar-fill" style="--bar-val: ${member.monthly[5] * 1.6}; width: 14px;" data-val="${member.monthly[5]}"></div>
            <span style="font-size: 9px; color: var(--text-muted);">7월</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 월별 상세 히스토리 내역 -->
    <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 13px; font-weight: 700; color: var(--primary-color);">월별 참석 횟수</span>
        <span style="font-size: 11px;">누적합: <strong style="color: var(--secondary-color);">${member.count}회</strong></span>
      </div>
      <div style="max-height: 120px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 4px;">
        ${historyListHTML}
      </div>
    </div>
  `;

  modal.classList.add('active');
};

window.setExpiryDays = function(days) {
  const expiryInput = document.getElementById('edit-pass-expiry-input');
  const now = new Date();
  now.setDate(now.getDate() + days);

  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');

  expiryInput.value = `${yyyy}-${mm}-${dd}`;
  showToast(`${days}일 후인 ${expiryInput.value}로 지정되었습니다.`);
};

window.clearExpiry = function() {
  document.getElementById('edit-pass-expiry-input').value = "";
  showToast("무제한 입장권 기한이 제거되었습니다.");
};

function handleEditMemberSubmit(e) {
  e.preventDefault();
  const targetName = document.getElementById('edit-member-target-name').value;
  const member = state.members.find(m => m.name === targetName);
  if (!member) return;

  member.role = document.getElementById('edit-member-role-select').value;
  member.intro = document.getElementById('edit-member-intro-chk').checked ? 'O' : 'X';
  member.chat = document.getElementById('edit-member-chat-chk').checked ? 'O' : 'X';

  member.pass5Count = parseInt(document.getElementById('edit-pass-5-input').value) || 0;
  member.freePassCount = parseInt(document.getElementById('edit-pass-free-input').value) || 0;
  member.monthlyPassExpiry = document.getElementById('edit-pass-expiry-input').value;

  saveData();
  document.getElementById('member-profile-modal').classList.remove('active');
  renderApp();
  showToast(`${targetName} 회원의 멤버십 및 패스 정보가 수정되었습니다.`);
}

function closeMemberProfile() {
  document.getElementById('member-profile-modal').classList.remove('active');
}

window.filterMainCategory = function(mainCat) {
  state.filterMainCategory = mainCat;
  state.filterSubCategory = "all";

  const tabs = document.querySelectorAll('.category-main-tab');
  tabs.forEach(tab => {
    const text = tab.textContent.trim();
    if ((mainCat === 'all' && text === '전체') || text === mainCat) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderSubChips();
  renderApp();
};

window.filterSubCategory = function(subCat) {
  state.filterSubCategory = subCat;
  
  const chips = document.querySelectorAll('.category-sub-chip');
  chips.forEach(chip => {
    const text = chip.textContent.trim();
    if ((subCat === 'all' && text === '전체') || text === subCat) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  renderApp();
};

function renderSubChips() {
  const container = document.getElementById('category-sub-chips');
  if (!container) return;

  if (state.filterMainCategory === 'all') {
    container.innerHTML = "";
    return;
  }

  const subCats = CATEGORY_MAP[state.filterMainCategory] || [];
  let markup = `<span class="category-sub-chip ${state.filterSubCategory === 'all' ? 'active' : ''}" onclick="filterSubCategory('all')">전체</span>`;
  
  subCats.forEach(sub => {
    markup += `<span class="category-sub-chip ${state.filterSubCategory === sub ? 'active' : ''}" onclick="filterSubCategory('${sub}')">${sub}</span>`;
  });

  container.innerHTML = markup;
}

window.updateSubCategoryOptions = function(mode) {
  const mainVal = document.getElementById(mode === 'create' ? 'event-main-cat' : 'edit-main-cat').value;
  const subSelect = document.getElementById(mode === 'create' ? 'event-sub-cat' : 'edit-sub-cat');
  if (!subSelect) return;

  const subs = CATEGORY_MAP[mainVal] || [];
  subSelect.innerHTML = subs.map(sub => `<option value="${sub}">${sub}</option>`).join('');
};

window.openParticipantsEditModal = function(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  document.getElementById('participants-modal-event-id').value = event.id;
  const listRoot = document.getElementById('participants-checkbox-list');
  if (!listRoot) return;

  listRoot.innerHTML = state.members.map(member => {
    const isChecked = event.participants.includes(member.name);
    return `
      <label style="display: flex; align-items: center; justify-content: space-between; font-size: 13px; cursor: pointer; padding: 6px 4px; border-bottom: 1px solid rgba(255,255,255,0.02);">
        <span style="display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" name="event-participant-chk" value="${member.name}" ${isChecked ? 'checked' : ''} style="width: 16px; height: 16px;">
          <strong>${member.name}</strong> 
          <span style="font-size: 10px; color: var(--text-muted);">(${member.role})</span>
        </span>
        <span style="font-size: 11px; color: var(--primary-color);">상생패스: ${member.pass5Count || 0}회</span>
      </label>
    `;
  }).join('');

  document.getElementById('event-participants-modal').classList.add('active');
};

function handleEditParticipantsSubmit(e) {
  e.preventDefault();
  const eventId = document.getElementById('participants-modal-event-id').value;
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  const checkboxes = document.querySelectorAll('input[name="event-participant-chk"]');
  const nextParticipants = [];

  checkboxes.forEach(chk => {
    if (chk.checked) {
      nextParticipants.push(chk.value);
    }
  });

  if (nextParticipants.length > event.limit) {
    showToast(`모임 정원(${event.limit}명)을 초과해 참가자를 강제 등록할 수 없습니다.`, false);
    return;
  }

  nextParticipants.forEach(name => {
    if (!event.participants.includes(name)) {
      const memberProfile = state.members.find(m => m.name === name);
      if (memberProfile) {
        memberProfile.count += 1;
        memberProfile.rate = Math.min(100, Math.round(memberProfile.rate + 1));
        
        if (memberProfile.pass5Count && memberProfile.pass5Count > 0) {
          memberProfile.pass5Count -= 1;
        } else if (memberProfile.freePassCount && memberProfile.freePassCount > 0) {
          memberProfile.freePassCount -= 1;
        }
      }
    }
  });

  event.participants = nextParticipants;
  saveData();
  document.getElementById('event-participants-modal').classList.remove('active');
  renderApp();
  showToast("모임 참가 인원 명부가 직권으로 업데이트되었습니다.");
}

function renderMyProfileTab() {
  const me = state.members.find(m => m.name === state.currentUser);
  if (!me) return;

  const cardContainer = document.getElementById('my-profile-card-container');
  const isLeader = me.role.includes("관리자") || me.role.includes("운영진");

  cardContainer.innerHTML = `
    <div class="glass-card" style="display: flex; flex-direction: column; gap: 20px; position: relative;">
      <div style="display: flex; align-items: center; gap: 16px; margin-top: 10px;">
        <div class="avatar" style="width: 64px; height: 64px; font-size: 20px; background: var(--primary-glow); margin: 0; font-weight: 800;">
          ${me.name.slice(-2)}
        </div>
        <div>
          <h3 style="font-family: var(--font-title); font-size: 20px; font-weight: 800; display: flex; align-items: center; gap: 6px;">
            ${me.name} 
            <span style="font-size: 13px; font-weight: normal; color: #f472b6;">🪻🌹🌷🌼🌻</span>
          </h3>
          <p style="${isLeader ? 'color: var(--accent-red); background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.2);' : 'color: var(--primary-color); background: rgba(167, 139, 250, 0.1); border-color: rgba(167, 139, 250, 0.2);'} font-size: 12px; font-weight: 700; margin-top: 4px; display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 99px; border: 1px solid;">
            ${me.role}
          </p>
        </div>
      </div>

      <div style="border-top: 1px solid var(--border-color); padding-top: 16px;">
        <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 12px; color: var(--primary-color);">기본 정보</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 13px;">
          <div style="display: flex; justify-content: space-between; padding-right: 12px; border-right: 1px solid var(--border-color);">
            <span style="color: var(--text-muted);">이름</span>
            <span style="font-weight: 600;">${me.name}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-left: 8px;">
            <span style="color: var(--text-muted);">가입일</span>
            <span style="font-weight: 600;">${me.date}</span>
          </div>
        </div>
      </div>

      <div style="border-top: 1px solid var(--border-color); padding-top: 16px;">
        <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 12px; color: var(--primary-color);">활동 현황</h4>
        <div style="display: flex; gap: 12px;">
          <div style="flex: 1; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 12px; text-align: center;">
            <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">가입인사 작성</div>
            <span style="font-size: 16px; font-weight: 800; color: var(--accent-green);">${me.intro}</span>
          </div>
          <div style="flex: 1; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 12px; text-align: center;">
            <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">오픈카톡 접속</div>
            <span style="font-size: 16px; font-weight: 800; color: ${me.chat === 'O' ? 'var(--accent-green)' : 'var(--accent-red)'};">${me.chat}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // 개인 보유 패스 잔량 렌더링
  const passCard = document.getElementById('my-pass-stock-card');
  const passRoot = document.getElementById('my-pass-stock-list');
  if (passCard && passRoot) {
    passCard.style.display = 'block';

    let expiryText = "미사용 (만료 또는 미구매)";
    if (me.monthlyPassExpiry) {
      const exp = new Date(me.monthlyPassExpiry);
      const today = new Date();
      today.setHours(0,0,0,0);
      expiryText = exp >= today ? `${me.monthlyPassExpiry} (이용 가능 👑)` : `${me.monthlyPassExpiry} (기간 만료 ❌)`;
    }

    passRoot.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 10px; font-size: 13px;">
        <span style="color: var(--text-muted);">아지트 5일 실속 패스 (WEEKLY PASS)</span>
        <strong style="color: var(--accent-green); font-size: 14px;">${me.pass5Count || 0}회 남음</strong>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 10px; font-size: 13px;">
        <span style="color: var(--text-muted);">이벤트 무료증정 패스</span>
        <strong style="color: var(--secondary-color); font-size: 14px;">${me.freePassCount || 0}회 남음</strong>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 10px; font-size: 13px;">
        <span style="color: var(--text-muted);">아지트 무제한 입장권 (MONTHLY PASS) 만료일</span>
        <strong style="font-size: 12px; color: var(--primary-color);">${expiryText}</strong>
      </div>
    `;
  }

  const chartCard = document.getElementById('my-chart-card');
  const chartRoot = document.getElementById('my-chart-container-root');
  if (chartCard && chartRoot) {
    chartCard.style.display = 'block';
    chartRoot.innerHTML = `
      <div class="chart-y-axis">
        <span>8</span>
        <span>6</span>
        <span>4</span>
        <span>2</span>
        <span>0</span>
      </div>
      <div class="chart-bars-wrapper">
        <div class="chart-bar-item">
          <div class="chart-bar-fill" style="--bar-val: ${me.monthly[0] * 1.6};" data-val="${me.monthly[0]}"></div>
          <span class="chart-bar-label">2월</span>
        </div>
        <div class="chart-bar-item">
          <div class="chart-bar-fill" style="--bar-val: ${me.monthly[1] * 1.6};" data-val="${me.monthly[1]}"></div>
          <span class="chart-bar-label">3월</span>
        </div>
        <div class="chart-bar-item">
          <div class="chart-bar-fill" style="--bar-val: ${me.monthly[2] * 1.6};" data-val="${me.monthly[2]}"></div>
          <span class="chart-bar-label">4월</span>
        </div>
        <div class="chart-bar-item">
          <div class="chart-bar-fill" style="--bar-val: ${me.monthly[3] * 1.6};" data-val="${me.monthly[3]}"></div>
          <span class="chart-bar-label">5월</span>
        </div>
        <div class="chart-bar-item">
          <div class="chart-bar-fill" style="--bar-val: ${me.monthly[4] * 1.6};" data-val="${me.monthly[4]}"></div>
          <span class="chart-bar-label">6월</span>
        </div>
        <div class="chart-bar-item">
          <div class="chart-bar-fill" style="--bar-val: ${me.monthly[5] * 1.6};" data-val="${me.monthly[5]}"></div>
          <span class="chart-bar-label">7월</span>
        </div>
      </div>
    `;
  }

  const historyCard = document.getElementById('my-history-card');
  const historyTotal = document.getElementById('my-history-total-label');
  const historyRoot = document.getElementById('my-history-list-root');

  if (historyCard && historyTotal && historyRoot) {
    historyCard.style.display = 'block';
    historyTotal.textContent = `${me.count}회`;

    const monthLabels = [
      "26년 7월", "26년 6월", "26년 5월", "26년 4월", "26년 3월", "26년 2월", 
      "26년 1월", "25년 12월", "25년 11월", "25년 10월", "25년 9월", "25년 8월", "25년 7월", "25년 6월"
    ];

    historyRoot.innerHTML = monthLabels.map((label, idx) => {
      const countVal = me.allHistory[idx] !== undefined ? me.allHistory[idx] : 0;
      return `
        <div class="history-row">
          <span>${label}</span>
          <strong>${countVal}회</strong>
        </div>
      `;
    }).join('');
  }
}

window.editEvent = function(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  document.getElementById('edit-event-id').value = event.id;
  document.getElementById('edit-title-input').value = event.title;
  document.getElementById('edit-date-input').value = event.datetime;
  document.getElementById('edit-location-input').value = event.location;
  document.getElementById('edit-limit-input').value = event.limit;
  document.getElementById('edit-status-select').value = event.status;
  document.getElementById('edit-code-input').value = event.code;

  document.getElementById('edit-main-cat').value = event.mainCategory || "보드게임";
  updateSubCategoryOptions('edit');
  document.getElementById('edit-sub-cat').value = event.subCategory || "자유";

  document.getElementById('edit-event-modal').classList.add('active');
};

function handleEditEventSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('edit-event-id').value;
  const event = state.events.find(e => e.id === id);
  if (!event) return;

  event.title = document.getElementById('edit-title-input').value;
  event.datetime = document.getElementById('edit-date-input').value;
  event.location = document.getElementById('edit-location-input').value;
  event.limit = parseInt(document.getElementById('edit-limit-input').value);
  event.status = document.getElementById('edit-status-select').value;
  event.code = document.getElementById('edit-code-input').value;

  event.mainCategory = document.getElementById('edit-main-cat').value;
  event.subCategory = document.getElementById('edit-sub-cat').value;

  saveData();
  document.getElementById('edit-event-modal').classList.remove('active');
  renderApp();
  showToast("모임 일정이 정상적으로 수정되었습니다.");
}

function renderApp() {
  const btnCreateModal = document.getElementById('btn-create-event-modal');
  if (btnCreateModal) {
    btnCreateModal.style.display = state.isAdmin ? 'block' : 'none';
  }

  renderHomePass();
  const myData = state.members.find(m => m.name === state.currentUser) || { rate: 0, count: 0 };
  const rateEl = document.getElementById('my-attendance-rate');
  const countEl = document.getElementById('my-attendance-count');
  const barEl = document.getElementById('my-attendance-progress');
  
  if (rateEl) rateEl.textContent = `${myData.rate}%`;
  if (countEl) countEl.textContent = `${myData.count}회`;
  if (barEl) {
    setTimeout(() => {
      barEl.style.width = `${myData.rate}%`;
    }, 50);
  }

  const eventListContainer = document.getElementById('event-list-container');
  if (eventListContainer) {
    let filteredEvents = [...state.events];
    
    if (state.filterMainCategory !== 'all') {
      filteredEvents = filteredEvents.filter(e => e.mainCategory === state.filterMainCategory);
      if (state.filterSubCategory !== 'all') {
        filteredEvents = filteredEvents.filter(e => e.subCategory === state.filterSubCategory);
      }
    }

    const sortedEvents = filteredEvents.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

    if (sortedEvents.length === 0) {
      eventListContainer.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 40px 0;">
          해당 분류의 모임 일정이 존재하지 않습니다. 🎲
        </div>
      `;
    } else {
      eventListContainer.innerHTML = sortedEvents.map(evt => {
        const isJoined = evt.participants.includes(state.currentUser);
        const dateFormatted = new Date(evt.datetime).toLocaleString('ko-KR', {
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: '2-digit',
          minute: '2-digit'
        });

        let statusText = '모집중';
        let statusClass = 'scheduled';
        if (evt.status === 'ongoing') {
          statusText = '진행중';
          statusClass = 'ongoing';
        } else if (evt.status === 'completed') {
          statusText = '완료됨';
          statusClass = 'completed';
        }

        const maxVisibleAvatars = 4;
        const avatarsMarkup = evt.participants.slice(0, maxVisibleAvatars).map(name => {
          const initial = name.charAt(0);
          return `<div class="avatar">${initial}</div>`;
        }).join('');
        
        const extraCount = evt.participants.length - maxVisibleAvatars;
        const extraMarkup = extraCount > 0 ? `<div class="avatar" style="background: rgba(255,255,255,0.1)">+${extraCount}</div>` : '';

        const mainCat = evt.mainCategory || "보드게임";
        const subCat = evt.subCategory || "자유";
        const emoji = SUB_CAT_EMOJI[subCat] || "♟️";
        const fillPercent = Math.min(100, Math.round((evt.participants.length / evt.limit) * 100));

        return `
          <div class="glass-card event-card">
            <div class="event-card-header">
              <div class="event-emblem-wrapper">${emoji}</div>
              <div class="event-card-details">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
                  <span style="font-size: 9px; background: rgba(167, 139, 250, 0.12); color: #c4b5fd; padding: 1px 6px; border-radius: 4px; border: 1px solid rgba(167, 139, 250, 0.2); font-weight: 700;">
                    ${mainCat}
                  </span>
                  <span style="font-size: 9px; background: rgba(244, 114, 182, 0.12); color: #f472b6; padding: 1px 6px; border-radius: 4px; border: 1px solid rgba(244, 114, 182, 0.2); font-weight: 700;">
                    ${subCat}
                  </span>
                </div>
                <h4 class="event-title">${evt.title}</h4>
                <span class="section-subtitle">${dateFormatted}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                ${state.isAdmin ? `<button class="role-badge" style="border-color: rgba(255, 255, 255, 0.15); color: #fff;" onclick="editEvent('${evt.id}')">수정</button>` : ''}
                <span class="event-badge ${statusClass}">${statusText}</span>
              </div>
            </div>
            
            <div class="event-info">
              <div class="info-row">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${evt.location}</span>
              </div>
              <div class="event-gauge-container">
                <div class="event-gauge-header">
                  <span>모집 정원 현황</span>
                  <strong style="color: var(--secondary-color);">${evt.participants.length} / ${evt.limit}명 (${fillPercent}%)</strong>
                </div>
                <div class="event-gauge-bar">
                  <div class="event-gauge-fill" style="width: ${fillPercent}%;"></div>
                </div>
              </div>
            </div>

            <div class="event-card-footer">
              <div class="participants-avatars">
                ${avatarsMarkup}
                ${extraMarkup}
              </div>

              <div style="display: flex; gap: 8px; align-items: center;">
                ${state.isAdmin && evt.status !== 'completed' ? `<button class="btn btn-secondary" style="padding: 6px 12px; font-size: 11px; border-color: rgba(167, 139, 250, 0.25); color: #c4b5fd;" onclick="openParticipantsEditModal('${evt.id}')">참가자 편집</button>` : ''}
                
                ${
                  evt.status === 'completed'
                    ? `<span style="color: var(--text-muted); font-size: 13px;">종료된 모임</span>`
                    : evt.status === 'ongoing'
                      ? isJoined
                        ? `<span style="color: var(--accent-green); font-weight: 700; font-size: 13px;">출석 완료</span>`
                        : `<button class="btn" style="padding: 6px 12px; font-size: 12px;" onclick="switchToTab('home')">홈에서 출석하기</button>`
                      : isJoined
                        ? `<button class="btn btn-danger" style="padding: 6px 12px; font-size: 12px;" onclick="toggleJoinEvent('${evt.id}')">신청 취소</button>`
                        : `<button class="btn btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="toggleJoinEvent('${evt.id}')">참가 신청</button>`
                }
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // [중요: 명예의 전당 랭킹 행 클릭 시 타 계원 프로필 조회 모달 바인딩]
  const rankContainer = document.getElementById('rank-list-container');
  if (rankContainer) {
    const sortedMembers = [...state.members].sort((a, b) => b.rate - a.rate);
    rankContainer.innerHTML = sortedMembers.map((member, idx) => {
      return `
        <div class="rank-item" style="cursor: pointer; transition: all 0.2s;" onclick="openMemberProfileView('${member.name}')">
          <div class="rank-left">
            <span class="rank-number">${idx + 1}</span>
            <span class="rank-name">${member.name} ${member.name === state.currentUser ? '(나) 👤' : ''}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 11px; color: var(--text-muted);">누적 ${member.count}회</span>
            <span class="rank-rate">${member.rate}%</span>
          </div>
        </div>
      `;
    }).join('');
  }

  if (state.currentUser) {
    renderMyProfileTab();
  }

  // [블로그식 구분선 및 운영진 관리 패널 권한 제어]
  const blogDivider = document.getElementById('blog-divider');
  const membersWrapper = document.getElementById('members-list-wrapper');
  const memberContainer = document.getElementById('member-list-container');
  
  if (blogDivider && membersWrapper) {
    if (state.isAdmin) {
      blogDivider.style.display = 'block';
      membersWrapper.style.display = 'block';
      if (memberContainer) {
        const otherMembers = state.members.filter(m => m.name !== state.currentUser);
        memberContainer.innerHTML = otherMembers.map((member, idx) => {
          return `
            <div class="rank-item" style="cursor: pointer; transition: background 0.2s;" onclick="openMemberProfile('${member.name}')">
              <div class="rank-left">
                <span class="rank-number" style="font-size: 12px; color: var(--text-muted);">${idx + 1}</span>
                <div>
                  <span class="rank-name" style="font-weight: 700;">${member.name}</span>
                  <span style="font-size: 10px; color: var(--text-muted); margin-left: 6px;">(${member.role})</span>
                </div>
              </div>
              <div style="text-align: right; display: flex; flex-direction: column; gap: 2px;">
                <span class="rank-rate">${member.rate}%</span>
                <span style="font-size: 10px; color: var(--text-muted);">${member.pass5Count || 0}회 / 무료: ${member.freePassCount || 0}회</span>
              </div>
            </div>
          `;
        }).join('');
      }
    } else {
      blogDivider.style.display = 'none';
      membersWrapper.style.display = 'none';
    }
  }
}

window.switchToTab = function(tabName) {
  const sidebarItem = document.querySelector(`.sidebar-item[data-tab="${tabName}"]`);
  if (sidebarItem) sidebarItem.click();
  const mobileItem = document.querySelector(`.mobile-nav-item[data-tab="${tabName}"]`);
  if (mobileItem) mobileItem.click();
};

window.toggleJoinEvent = function(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  const userIdx = event.participants.indexOf(state.currentUser);
  if (userIdx > -1) {
    event.participants.splice(userIdx, 1);
    showToast("모임 신청을 취소했습니다.");
  } else {
    if (event.participants.length >= event.limit) {
      showToast("모임 정원이 초과되었습니다.", false);
      return;
    }
    event.participants.push(state.currentUser);
    showToast("모임 참가가 신청되었습니다! 🎉");
  }
  saveData();
  renderApp();
};

function handleCreateEvent(e) {
  e.preventDefault();

  const title = document.getElementById('event-title-input').value;
  const datetime = document.getElementById('event-date-input').value;
  const location = document.getElementById('event-location-input').value;
  const limit = parseInt(document.getElementById('event-limit-input').value);
  const randomCode = Math.floor(1000 + Math.random() * 9000).toString();

  const mainCategory = document.getElementById('event-main-cat').value;
  const subCategory = document.getElementById('event-sub-cat').value;

  const newEvent = {
    id: `evt-${Date.now()}`,
    title,
    datetime,
    location,
    limit,
    participants: [state.currentUser],
    status: "ongoing",
    code: randomCode,
    mainCategory,
    subCategory
  };

  state.events.unshift(newEvent);
  saveData();
  
  document.getElementById('create-event-modal').classList.remove('active');
  document.getElementById('create-event-form').reset();
  
  switchToTab('home');
  showToast(`모임이 개설되었습니다! (출석코드: ${randomCode})`);
}

function initEventListeners() {
  const loginCard = document.getElementById('card-login-view');
  const regCard = document.getElementById('card-register-view');

  document.getElementById('go-to-register').addEventListener('click', () => {
    loginCard.style.display = 'none';
    regCard.style.display = 'block';
  });

  document.getElementById('go-to-login').addEventListener('click', () => {
    regCard.style.display = 'none';
    loginCard.style.display = 'block';
  });

  document.getElementById('login-form').addEventListener('submit', handleLoginSubmit);
  document.getElementById('register-form').addEventListener('submit', handleRegisterSubmit);
  document.getElementById('edit-member-role-form').addEventListener('submit', handleEditMemberSubmit);

  document.getElementById('btn-sidebar-logout').addEventListener('click', handleLogout);
  document.getElementById('btn-mobile-logout').addEventListener('click', handleLogout);

  document.getElementById('btn-create-event-modal').addEventListener('click', () => {
    document.getElementById('create-event-modal').classList.add('active');
    updateSubCategoryOptions('create');
  });

  const closeCreate = () => document.getElementById('create-event-modal').classList.remove('active');
  document.getElementById('btn-close-create').addEventListener('click', closeCreate);
  document.getElementById('btn-cancel-create').addEventListener('click', closeCreate);
  document.getElementById('create-event-form').addEventListener('submit', handleCreateEvent);

  const closeEdit = () => document.getElementById('edit-event-modal').classList.remove('active');
  document.getElementById('btn-close-edit').addEventListener('click', closeEdit);
  document.getElementById('btn-cancel-edit').addEventListener('click', closeEdit);
  document.getElementById('edit-event-form').addEventListener('submit', handleEditEventSubmit);

  const closeMember = () => document.getElementById('member-profile-modal').classList.remove('active');
  document.getElementById('btn-close-member-modal').addEventListener('click', closeMember);
  document.getElementById('btn-close-member-modal-confirm').addEventListener('click', closeMember);

  // [신규] 타 회원 상세 정보 모달 닫기 바인딩
  const closeViewMember = () => document.getElementById('member-view-modal').classList.remove('active');
  document.getElementById('btn-close-view-modal').addEventListener('click', closeViewMember);
  document.getElementById('btn-close-view-modal-confirm').addEventListener('click', closeViewMember);

  const closeParticipants = () => document.getElementById('event-participants-modal').classList.remove('active');
  document.getElementById('btn-close-participants-modal').addEventListener('click', closeParticipants);
  document.getElementById('btn-cancel-participants-modal').addEventListener('click', closeParticipants);
  document.getElementById('edit-event-participants-form').addEventListener('submit', handleEditParticipantsSubmit);

  document.getElementById('btn-reset-data').addEventListener('click', () => {
    localStorage.removeItem('boardgye_events');
    localStorage.removeItem('boardgye_members');
    localStorage.removeItem('boardgye_isAdmin');
    showToast("데이터 초기화 완료");
    loadData();
    renderApp();
  });

  window.addEventListener('click', (e) => {
    const createModal = document.getElementById('create-event-modal');
    const editModal = document.getElementById('edit-event-modal');
    const memberModal = document.getElementById('member-profile-modal');
    const viewModal = document.getElementById('member-view-modal');
    const participantsModal = document.getElementById('event-participants-modal');
    if (e.target === createModal) closeCreate();
    if (e.target === editModal) closeEdit();
    if (e.target === memberModal) closeMember();
    if (e.target === viewModal) closeViewMember();
    if (e.target === participantsModal) closeParticipants();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initForceSync();
  loadData();
  initTabs();
  initRoleToggle();
  initEventListeners();
  checkLoginSession(); 
});
