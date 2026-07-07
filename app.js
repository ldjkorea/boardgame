// 사진 기반 모임 일정 정의
const DEFAULT_EVENTS = [
  {
    id: "evt-02",
    title: "자유벙",
    datetime: "2026-07-02T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["박전략", "이루미", "최협력", "정클루", "길시온", "이동준"],
    status: "completed",
    code: "1002"
  },
  {
    id: "evt-03",
    title: "회식벙",
    datetime: "2026-07-03T20:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["이루미", "박전략", "최협력", "길시온", "이동준"],
    status: "completed",
    code: "1003"
  },
  {
    id: "evt-04",
    title: "자유벙",
    datetime: "2026-07-04T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["박전략", "정클루", "최협력"],
    status: "completed",
    code: "1004"
  },
  {
    id: "evt-05",
    title: "자유벙",
    datetime: "2026-07-05T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["길시온", "이루미", "이동준"],
    status: "completed",
    code: "1005"
  },
  {
    id: "evt-07",
    title: "머미벙",
    datetime: "2026-07-07T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: ["이루미", "박전략"], 
    status: "ongoing",
    code: "7707"
  },
  {
    id: "evt-09",
    title: "자유벙",
    datetime: "2026-07-09T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7709"
  },
  {
    id: "evt-10",
    title: "회식2벙",
    datetime: "2026-07-10T20:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7710"
  },
  {
    id: "evt-11",
    title: "파티/철도벙",
    datetime: "2026-07-11T14:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7711"
  },
  {
    id: "evt-12",
    title: "클라이밍",
    datetime: "2026-07-12T13:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7712"
  },
  {
    id: "evt-14",
    title: "돌아온3D벙",
    datetime: "2026-07-14T19:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7714"
  },
  {
    id: "evt-16",
    title: "페스타1",
    datetime: "2026-07-16T11:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7716"
  },
  {
    id: "evt-17",
    title: "페스타2",
    datetime: "2026-07-17T11:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7717"
  },
  {
    id: "evt-18",
    title: "홍수벙/강릉MT",
    datetime: "2026-07-18T09:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7718"
  },
  {
    id: "evt-19",
    title: "강릉MT",
    datetime: "2026-07-19T09:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7719"
  },
  {
    id: "evt-21",
    title: "장보기",
    datetime: "2026-07-21T18:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7721"
  },
  {
    id: "evt-26",
    title: "생일파티벙",
    datetime: "2026-07-26T18:00",
    location: "[이수] 보드계 아지트",
    limit: 10,
    participants: [],
    status: "scheduled",
    code: "7726"
  }
];

// 회원 명부 데이터 정의
const DEFAULT_MEMBERS = [
  { name: "길시온", pw: "1111", role: "🔴 관리자", rate: 92, count: 149, date: "25.05.19", intro: "O", chat: "O", monthly: [9, 12, 16, 11, 13, 7], allHistory: [7, 12, 16, 11, 13, 9, 10, 14, 13, 13, 10, 8, 4, 7], pass5Count: 3, freePassCount: 1, monthlyPassExpiry: "2026-08-31" },
  { name: "이동준", pw: "1111", role: "🔴 관리자", rate: 75, count: 29, date: "25.11.17", intro: "O", chat: "O", monthly: [3, 4, 1, 5, 6, 1], allHistory: [1, 6, 5, 1, 4, 3, 1, 5, 3, 0, 0, 0, 0, 0], pass5Count: 5, freePassCount: 0, monthlyPassExpiry: "" },
  { name: "박전략", pw: "1111", role: "👑 운영진", rate: 85, count: 120, date: "25.06.12", intro: "O", chat: "O", monthly: [6, 10, 14, 9, 11, 5], allHistory: [5, 11, 9, 14, 10, 6, 8, 12, 11, 10, 8, 6, 4, 6], pass5Count: 0, freePassCount: 0, monthlyPassExpiry: "" },
  { name: "이루미", pw: "1111", role: "🚪 문지기", rate: 80, count: 112, date: "25.07.24", intro: "O", chat: "O", monthly: [8, 9, 13, 8, 10, 6], allHistory: [6, 10, 8, 13, 9, 8, 7, 11, 10, 9, 9, 8, 4, 4], pass5Count: 0, freePassCount: 2, monthlyPassExpiry: "" },
  { name: "최협력", pw: "1111", role: "💎 특급계원", rate: 50, count: 70, date: "25.09.05", intro: "O", chat: "O", monthly: [4, 5, 8, 5, 6, 2], allHistory: [2, 6, 5, 8, 5, 4, 4, 7, 6, 6, 5, 5, 3, 4], pass5Count: 0, freePassCount: 0, monthlyPassExpiry: "" },
  { name: "정클루", pw: "1111", role: "⭐ 우수계원", rate: 40, count: 56, date: "25.10.11", intro: "O", chat: "X", monthly: [3, 4, 6, 4, 5, 1], allHistory: [1, 5, 4, 6, 4, 3, 3, 5, 5, 5, 4, 4, 3, 4], pass5Count: 0, freePassCount: 0, monthlyPassExpiry: "" }
];

let state = {
  isAdmin: true,
  events: [],
  members: [],
  currentUser: null,
  activeTab: "home"
};

function initForceSync() {
  const cachedMembers = localStorage.getItem('boardgye_members');
  let needReset = false;

  if (cachedMembers) {
    try {
      const parsed = JSON.parse(cachedMembers);
      const dongjunMember = parsed.find(m => m.name === "이동준");
      
      // 혹시라도 구버전 데이터가 메모리를 교란할 시 강제 초기화
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
    console.log("이동준 마스터의 정확한 활동 통계 적용을 위해 스토리지를 갱신합니다.");
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

// 회원이 출석코드 제출 시 자동 패스 차감 연산 수행 (명칭 반영)
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

      // [자동 차감 로직 실행]
      // 1순위: 무제한 입장권 (MONTHLY PASS)
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
      // 2순위: 5일 실속 패스 (WEEKLY PASS) 차감
      else if (myProfile.pass5Count && myProfile.pass5Count > 0) {
        myProfile.pass5Count -= 1;
        deductionMessage = `5일 실속 패스 (WEEKLY PASS) 1회 차감 완료! (남은 횟수: ${myProfile.pass5Count}회) 🎟️`;
      } 
      // 3순위: 이벤트 무료증정권 잔여 차감
      else if (myProfile.freePassCount && myProfile.freePassCount > 0) {
        myProfile.freePassCount -= 1;
        deductionMessage = `이벤트 무료증정권 1회 차감 완료! (남은 횟수: ${myProfile.freePassCount}회) 🎁`;
      } 
      // 4순위: 차감할 패스 없음
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

    <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
      <span style="font-size: 13px; font-weight: 700; color: var(--primary-color); display: block; margin-bottom: 8px;">활동 인증 여부</span>
      <div style="display: flex; gap: 12px; font-size: 11px;">
        <div style="flex: 1; background: rgba(255,255,255,0.02); padding: 8px; text-align: center; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="color: var(--text-muted); margin-bottom: 2px;">가입인사</div>
          <strong style="color: var(--accent-green); font-size: 13px;">${member.intro}</strong>
        </div>
        <div style="flex: 1; background: rgba(255,255,255,0.02); padding: 8px; text-align: center; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="color: var(--text-muted); margin-bottom: 2px;">오픈카톡</div>
          <strong style="${member.chat === 'O' ? 'color: var(--accent-green);' : 'color: var(--accent-red);'} font-size: 13px;">${member.chat}</strong>
        </div>
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

  // 개인 보유 패스 잔량 렌더링 (최종 브랜드명 반영)
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
    const sortedEvents = [...state.events].sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

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

      return `
        <div class="glass-card event-card">
          <div class="event-card-header">
            <div>
              <h4 class="event-title">${evt.title}</h4>
              <span class="section-subtitle">${dateFormatted}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              ${state.isAdmin ? `<button class="role-badge" style="border-color: rgba(255,255,255,0.15); color: #fff;" onclick="editEvent('${evt.id}')">수정</button>` : ''}
              <span class="event-badge ${statusClass}">${statusText}</span>
            </div>
          </div>
          
          <div class="event-info">
            <div class="info-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${evt.location}</span>
            </div>
            <div class="info-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>참가인원: ${evt.participants.length} / ${evt.limit}명</span>
            </div>
          </div>

          <div class="event-card-footer">
            <div class="participants-avatars">
              ${avatarsMarkup}
              ${extraMarkup}
            </div>

            <div>
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

  const rankContainer = document.getElementById('rank-list-container');
  if (rankContainer) {
    const sortedMembers = [...state.members].sort((a, b) => b.rate - a.rate);
    rankContainer.innerHTML = sortedMembers.map((member, idx) => {
      return `
        <div class="rank-item">
          <div class="rank-left">
            <span class="rank-number">${idx + 1}</span>
            <span class="rank-name">${member.name} ${member.name === state.currentUser ? '(나)' : ''}</span>
          </div>
          <span class="rank-rate">${member.rate}%</span>
        </div>
      `;
    }).join('');
  }

  if (state.currentUser) {
    renderMyProfileTab();
  }

  const membersWrapper = document.getElementById('members-list-wrapper');
  const memberContainer = document.getElementById('member-list-container');
  
  if (membersWrapper) {
    if (state.isAdmin) {
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

  const newEvent = {
    id: `evt-${Date.now()}`,
    title,
    datetime,
    location,
    limit,
    participants: [state.currentUser],
    status: "ongoing",
    code: randomCode
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
    if (e.target === createModal) closeCreate();
    if (e.target === editModal) closeEdit();
    if (e.target === memberModal) closeMember();
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
