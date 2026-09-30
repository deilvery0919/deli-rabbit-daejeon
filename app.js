// 대전 지역 배차 mockData (구별 필드 추가 및 매핑)
const mockData = [
  // --- 대전 유성구 (201~213) ---
  { id: 'DL-YUS-001', district: '유성구', address: '대전 유성구 관평동 150', code: '201', sector: '관평동', driver: '임재현', status: 'UNSCANNED', lat: 36.4251, lng: 127.3912 },
  { id: 'DL-YUS-002', district: '유성구', address: '대전 유성구 봉산동 10',  code: '202', sector: '구즉동', driver: '임재현', status: 'UNSCANNED', lat: 36.4380, lng: 127.3820 },
  { id: 'DL-YUS-003', district: '유성구', address: '대전 유성구 노은동 100', code: '203', sector: '노은1동', driver: '한상훈', status: 'SCANNED',   lat: 36.3751, lng: 127.3182 },
  { id: 'DL-YUS-004', district: '유성구', address: '대전 유성구 지족동 45',  code: '204', sector: '노은2동', driver: '한상훈', status: 'UNSCANNED', lat: 36.3882, lng: 127.3195 },
  { id: 'DL-YUS-005', district: '유성구', address: '대전 유성구 반석동 12',  code: '205', sector: '노은3동', driver: '한상훈', status: 'SCANNED',   lat: 36.3981, lng: 127.3142 },
  { id: 'DL-YUS-006', district: '유성구', address: '대전 유성구 상대동 10',  code: '206', sector: '상대동', driver: '윤서준', status: 'UNSCANNED', lat: 36.3528, lng: 127.3381 },
  { id: 'DL-YUS-007', district: '유성구', address: '대전 유성구 신성동 50',  code: '207', sector: '신성동', driver: '조현우', status: 'UNSCANNED', lat: 36.3820, lng: 127.3510 },
  { id: 'DL-YUS-008', district: '유성구', address: '대전 유성구 봉명동 100', code: '208', sector: '온천1동', driver: '조현우', status: 'UNSCANNED', lat: 36.3582, lng: 127.3421 },
  { id: 'DL-YUS-009', district: '유성구', address: '대전 유성구 궁동 15',    code: '209', sector: '온천2동', driver: '조현우', status: 'SCANNED',   lat: 36.3631, lng: 127.3489 },
  { id: 'DL-YUS-010', district: '유성구', address: '대전 유성구 원신흥동 50',code: '210', sector: '원신흥동', driver: '윤서준', status: 'SCANNED',   lat: 36.3452, lng: 127.3341 },
  { id: 'DL-YUS-011', district: '유성구', address: '대전 유성구 전민동 70',  code: '211', sector: '전민동', driver: '임재현', status: 'UNSCANNED', lat: 36.4028, lng: 127.3992 },
  { id: 'DL-YUS-012', district: '유성구', address: '대전 유성구 학하동 30',  code: '213', sector: '학하동', driver: '윤서준', status: 'UNSCANNED', lat: 36.3410, lng: 127.3180 },

  // --- 대전 동구 (301~315) ---
  { id: 'DL-DONG-001', district: '동구', address: '대전 동구 가양동 100',  code: '301', sector: '가양1동', driver: '김철수', status: 'UNSCANNED', lat: 36.3451, lng: 127.4432 },
  { id: 'DL-DONG-002', district: '동구', address: '대전 동구 가양동 250',  code: '302', sector: '가양2동', driver: '김철수', status: 'SCANNED',   lat: 36.3475, lng: 127.4450 },
  { id: 'DL-DONG-003', district: '동구', address: '대전 동구 대동 15',    code: '303', sector: '대동',   driver: '김철수', status: 'UNSCANNED', lat: 36.3321, lng: 127.4411 },
  { id: 'DL-DONG-004', district: '동구', address: '대전 동구 낭월동 50',  code: '304', sector: '산내동', driver: '박민수', status: 'UNSCANNED', lat: 36.2810, lng: 127.4621 },
  { id: 'DL-DONG-005', district: '동구', address: '대전 동구 삼성동 10',  code: '305', sector: '삼성동', driver: '이영희', status: 'SCANNED',   lat: 36.3371, lng: 127.4285 },
  { id: 'DL-DONG-006', district: '동구', address: '대전 동구 성남동 30',  code: '306', sector: '성남동', driver: '이영희', status: 'UNSCANNED', lat: 36.3418, lng: 127.4342 },
  { id: 'DL-DONG-007', district: '동구', address: '대전 동구 인동 20',    code: '307', sector: '신인동', driver: '이영희', status: 'UNSCANNED', lat: 36.3245, lng: 127.4332 },
  { id: 'DL-DONG-008', district: '동구', address: '대전 동구 용운동 50',  code: '308', sector: '용운동', driver: '박민수', status: 'SCANNED',   lat: 36.3284, lng: 127.4612 },
  { id: 'DL-DONG-009', district: '동구', address: '대전 동구 용전동 12',  code: '309', sector: '용전동', driver: '이영희', status: 'SCANNED',   lat: 36.3512, lng: 127.4371 },
  { id: 'DL-DONG-010', district: '동구', address: '대전 동구 자양동 20',  code: '310', sector: '자양동', driver: '김철수', status: 'UNSCANNED', lat: 36.3385, lng: 127.4481 },
  { id: 'DL-DONG-011', district: '동구', address: '대전 동구 원동 10',    code: '311', sector: '중앙동', driver: '김철수', status: 'UNSCANNED', lat: 36.3301, lng: 127.4310 },
  { id: 'DL-DONG-012', district: '동구', address: '대전 동구 판암동 100', code: '312', sector: '판암1동', driver: '박민수', status: 'UNSCANNED', lat: 36.3198, lng: 127.4582 },
  { id: 'DL-DONG-013', district: '동구', address: '대전 동구 판암동 300', code: '313', sector: '판암2동', driver: '박민수', status: 'SCANNED',   lat: 36.3150, lng: 127.4610 },
  { id: 'DL-DONG-014', district: '동구', address: '대전 동구 홍도동 45',  code: '314', sector: '홍도동', driver: '이영희', status: 'UNSCANNED', lat: 36.3480, lng: 127.4310 },
  { id: 'DL-DONG-015', district: '동구', address: '대전 동구 효동 60',    code: '315', sector: '효동',   driver: '이영희', status: 'UNSCANNED', lat: 36.3188, lng: 127.4315 },

  // --- 대전 대덕구 (401~408) ---
  { id: 'DL-DAE-001', district: '대덕구', address: '대전 대덕구 대화동 50',  code: '401', sector: '대화동', driver: '최동현', status: 'UNSCANNED', lat: 36.3688, lng: 127.4152 },
  { id: 'DL-DAE-002', district: '대덕구', address: '대전 대덕구 법동 30',    code: '402', sector: '법1동',   driver: '강성태', status: 'UNSCANNED', lat: 36.3695, lng: 127.4358 },
  { id: 'DL-DAE-003', district: '대덕구', address: '대전 대덕구 법동 180',   code: '403', sector: '법2동',   driver: '강성태', status: 'SCANNED',   lat: 36.3720, lng: 127.4380 },
  { id: 'DL-DAE-004', district: '대덕구', address: '대전 대덕구 비래동 40',  code: '404', sector: '비래동', driver: '정준호', status: 'UNSCANNED', lat: 36.3562, lng: 127.4458 },
  { id: 'DL-DAE-005', district: '대덕구', address: '대전 대덕구 송촌동 100', code: '405', sector: '송촌동', driver: '정준호', status: 'SCANNED',   lat: 36.3621, lng: 127.4412 },
  { id: 'DL-DAE-006', district: '대덕구', address: '대전 대덕구 오정동 100', code: '406', sector: '오정동', driver: '최동현', status: 'UNSCANNED', lat: 36.3615, lng: 127.4208 },
  { id: 'DL-DAE-007', district: '대덕구', address: '대전 대덕구 중리동 12',  code: '407', sector: '중리동', driver: '정준호', status: 'UNSCANNED', lat: 36.3601, lng: 127.4312 },
  { id: 'DL-DAE-008', district: '대덕구', address: '대전 대덕구 읍내동 15',  code: '408', sector: '회덕동', driver: '최동현', status: 'SCANNED',   lat: 36.3789, lng: 127.4251 }
];

let deliveries = [...mockData];
let currentDistrict = 'ALL';
let map;
let markers = [];

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  populateSectorFilter();
  setupEvents();
  render();
});

function initMap() {
  map = L.map('map').setView([36.3600, 127.3900], 11);
  // ✅ OpenStreetMap - API Key 절대 안 물어보는 완전 무료 주소
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
}

function setupEvents() {
  // 구 선택 탭 이벤트
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentDistrict = e.target.dataset.district;
      populateSectorFilter();
      render();
    });
  });

  // 검색 및 필터 이벤트
  document.getElementById('search-input').addEventListener('input', render);
  document.getElementById('sector-filter').addEventListener('change', render);

  // 실시간 스캔 입력 이벤트
  const scanInput = document.getElementById('scan-input');
  const scanBtn = document.getElementById('scan-btn');

  const handleScan = () => {
    const val = scanInput.value.trim().toUpperCase();
    if (!val) return;

    const target = deliveries.find(d => d.id === val || d.code === val);
    if (target) {
      if (target.status === 'SCANNED') {
        alert(`이미 스캔 완료된 물량입니다. (${target.id})`);
      } else {
        target.status = 'SCANNED';
        scanInput.value = '';
        render(); // 화면 전체 재렌더링 (다운카운트 + 그래프 + 지도 업데이트)
      }
    } else {
      alert(`일치하는 배차 번호나 코드가 없습니다: ${val}`);
    }
  };

  scanBtn.addEventListener('click', handleScan);
  scanInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleScan();
  });
}

function populateSectorFilter() {
  const select = document.getElementById('sector-filter');
  select.innerHTML = '<option value="ALL">전체 동/코드</option>';

  const filteredByDist = currentDistrict === 'ALL' 
    ? deliveries 
    : deliveries.filter(d => d.district === currentDistrict);

  const sortedItems = [...filteredByDist].sort((a, b) => Number(a.code) - Number(b.code));
  const uniqueSectors = new Set();

  sortedItems.forEach(item => {
    const label = `[${item.code}] ${item.sector}`;
    if (!uniqueSectors.has(label)) {
      uniqueSectors.add(label);
      const opt = document.createElement('option');
      opt.value = label;
      opt.textContent = label;
      select.appendChild(opt);
    }
  });
}

// 수동 스캔 처리 함수 (목록 내 클릭)
window.toggleScanStatus = function(id) {
  const item = deliveries.find(d => d.id === id);
  if (item) {
    item.status = item.status === 'SCANNED' ? 'UNSCANNED' : 'SCANNED';
    render();
  }
};

function render() {
  const searchText = document.getElementById('search-input').value.toLowerCase();
  const selectedFilter = document.getElementById('sector-filter').value;

  // 1. 구 탭 및 검색어 필터링
  const filtered = deliveries.filter(item => {
    const matchesDistrict = currentDistrict === 'ALL' || item.district === currentDistrict;
    const itemLabel = `[${item.code}] ${item.sector}`;
    const matchesSearch = item.id.toLowerCase().includes(searchText) ||
                          item.address.toLowerCase().includes(searchText) ||
                          item.driver.toLowerCase().includes(searchText) ||
                          item.code.toLowerCase().includes(searchText) ||
                          item.sector.toLowerCase().includes(searchText);
    const matchesFilter = selectedFilter === 'ALL' || itemLabel === selectedFilter;

    return matchesDistrict && matchesSearch && matchesFilter;
  });

  // 2. 실시간 카운터 계산 (다운카운터)
  const currentDistrictItems = currentDistrict === 'ALL' 
    ? deliveries 
    : deliveries.filter(d => d.district === currentDistrict);

  const total = currentDistrictItems.length;
  const scanned = currentDistrictItems.filter(d => d.status === 'SCANNED').length;
  const unscanned = total - scanned;
  const percentage = total > 0 ? Math.round((scanned / total) * 100) : 0;

  document.getElementById('total-count').textContent = total; 
  document.getElementById('scanned-count').textContent = scanned; 
  document.getElementById('unscanned-count').textContent = unscanned; 
  document.getElementById('progress-text').textContent = `${percentage}%`;  
  document.getElementById('progress-bar').style.width = `${percentage}%`; 
  document.getElementById('filtered-count').textContent = `${filtered.length}건`; 

  // 3. 목록 UI 렌더링
  const listEl = document.getElementById('delivery-list');
  listEl.innerHTML = '';
  filtered.forEach(item => {
    const li = document.createElement('li');
    li.className = `delivery-item ${item.status.toLowerCase()}`;
    li.innerHTML = `
      <div class="item-info">
        <span class="item-title">[${item.code}] ${item.sector} | ${item.id}</span>
        <span class="item-sub"><i class="fa-solid fa-user"></i> ${item.driver} · ${item.address}</span>
      </div>
      <div class="item-action">
        <span class="status-badge ${item.status.toLowerCase()}">
          ${item.status === 'SCANNED' ? '스캔완료' : '미스캔'}
        </span>
        <button class="manual-scan-btn" onclick="toggleScanStatus('${item.id}')">
          ${item.status === 'SCANNED' ? '취소' : '스캔'}
        </button>
      </div>
    `;
    listEl.appendChild(li);
  });

  // 4. 지도 마커 업데이트   
  updateMapMarkers(filtered);
}

function updateMapMarkers(items) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const bounds = [];
  items.forEach(item => {
    const color = item.status === 'SCANNED' ? '#10b981' : '#f43f5e';
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 8,
      color: color,
      fillColor: color,
      fillOpacity: 0.85
    }).addTo(map);

    marker.bindPopup(`
      <div style="color: #0f172a; font-size:12px; font-family: Pretendard;">
        <b style="font-size:13px; color:#6366f1;">[${item.code}] ${item.sector} (${item.id})</b><br>
        <b>구분:</b> ${item.district}<br>
        <b>기사:</b> ${item.driver}<br>
        <b>주소:</b> ${item.address}<br> 
        <b>상태:</b> <b style="color:${item.status === 'SCANNED' ? '#10b981' : '#f43f5e'}">${item.status === 'SCANNED' ? '스캔완료' : '미스캔'}</b>
      </div>
    `);
    markers.push(marker);
    bounds.push([item.lat, item.lng]);
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [40, 40] });
  }
}