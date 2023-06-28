import React, { useEffect } from 'react';

function TextView() {
  useEffect(() => {
    // "비트캠프 701" 텍스트
    var keyword = "비트캠프 701";
    var canvas;
    var context;

    var bgCanvas;
    var bgContext;

    // 입자의 밀도
    var denseness = 10;

    // 각각의 입자/아이콘
    var parts = [];

    // 마우스 위치
    var mouse = { x: -100, y: -100 };
    var mouseOnScreen = false;

    // 반복 횟수 카운터
    var itercount = 0;
    var itertot = 40;

    const initialize = (canvas_id) => {
      // 캔버스 요소와 컨텍스트 가져오기
      canvas = document.getElementById(canvas_id);
      context = canvas.getContext('2d');

      // 캔버스 크기 설정
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // 배경 캔버스 요소와 컨텍스트 생성
      bgCanvas = document.createElement('canvas');
      bgContext = bgCanvas.getContext('2d');

      // 배경 캔버스 크기 설정
      bgCanvas.width = window.innerWidth;
      bgCanvas.height = window.innerHeight;

      // 마우스 이벤트 리스너 등록
      canvas.addEventListener('mousemove', MouseMove, false);
      canvas.addEventListener('mouseout', MouseOut, false);

      start();
    }

    const start = () => {
      // 배경 캔버스에 텍스트 그리기
      bgContext.fillStyle = "#ffffff";
      bgContext.font = '300px impact';
      bgContext.fillText(keyword, 85, 275);

      clear();
      getCoords();
    }

    const getCoords = () => {
      var imageData, pixel, height, width;

      // 배경 캔버스 이미지 데이터 가져오기
      imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);

      // 픽셀을 빠르게 반복하면서 입자 그리기
      for (height = 0; height < bgCanvas.height; height += denseness) {
        for (width = 0; width < bgCanvas.width; width += denseness) {
          pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
          // 픽셀이 검정색인 경우
          if (pixel === 255) {
            drawCircle(width, height);
          }
        }
      }

      // 주기적으로 업데이트 함수 호출
      setInterval(update, 30);
    }

    const drawCircle = (x, y) => {
      var startx = (Math.random() * canvas.width);
      var starty = (Math.random() * canvas.height);

      var velx = (x - startx) / itertot;
      var vely = (y - starty) / itertot;

      // 입자 배열에 추가
      parts.push(
        {
          c: '#' + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16),
          x: x, // 목표 위치
          y: y,
          x2: startx, // 시작 위치
          y2: starty,
          r: true, // 해방됨 (자유롭게 이동)
          v: { x: velx, y: vely }
        }
      )
    }

    const update = () => {
      var i, dx, dy, sqrDist;
      itercount++;
      clear();
      for (i = 0; i < parts.length; i++) {

        // 입자가 해방된 경우
        if (parts[i].r === true) {
          // 무한히 날아다니기
          parts[i].x2 += parts[i].v.x;
          parts[i].y2 += parts[i].v.y;
          // 화면 밖으로 벗어난 경우 제거할지 확인할 수도 있음
        }
        if (itercount === itertot) {
          parts[i].v = { x: (Math.random() * 6) * 2 - 6, y: (Math.random() * 6) * 2 - 6 };
          parts[i].r = false;
        }


        // 마우스와의 거리 계산 및 그리기
        dx = parts[i].x - mouse.x;
        dy = parts[i].y - mouse.y;
        sqrDist = Math.sqrt(dx * dx + dy * dy);

        if (sqrDist < 20) {
          parts[i].r = true;
        }

        // 원 그리기
        context.fillStyle = parts[i].c;
        context.beginPath();
        context.arc(parts[i].x2, parts[i].y2, 4, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
      }
    }

    const MouseMove = (e) => {
      if (e.layerX || e.layerX === 0) {
        // 입자 위치 초기화
        mouseOnScreen = true;

        mouse.x = e.layerX - canvas.offsetLeft;
        mouse.y = e.layerY - canvas.offsetTop;
      }
    }

    const MouseOut = (e) => {
      mouseOnScreen = false;
      mouse.x = -100;
      mouse.y = -100;
    }

    // 화면을 지우는 함수
    const clear = () => {
      context.fillStyle = '#333';
      context.beginPath();
      context.rect(0, 0, canvas.width, canvas.height);
      context.closePath();
      context.fill();
    }

    // 초기화 함수 호출
    initialize("canvas");
  }, []);

  return <canvas id="canvas"></canvas>;
}

export default TextView;
