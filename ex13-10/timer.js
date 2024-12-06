let count=0;
let timerID=null; // 타이머 ID

onmessage = function (e) { // 브라우저로부터 메시지 수신
	if(e.data == "start") {
		if(timerID != null) return; // 타이머 작동중이면 리턴
		timerID = setInterval(myCallback, 1000); // 1초 간격 myCallback() 호출
	}
	else if(e.data == "stop") {
		if(timerID == null) return; // 타이머 작동하지 않으면 리턴
		clearInterval(timerID);
		close();
	}
}

function myCallback() { // 1초 간격으로 호출
	count++; // 카운트 값 증가
	postMessage(count); // 카운트 값을 브라우저로 전송
}
