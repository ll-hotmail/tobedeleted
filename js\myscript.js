/* Mock JavaScript from snippets depot */
function showTurningLine(element) {
    // Create hourglass animation
    element.innerHTML = `
        <div style="
            width: 60px;
            height: 80px;
            position: relative;
            border: 4px solid #333;
            border-top: none;
            border-bottom: none;
            animation: turnHourglass 3s ease-in-out;
        ">
            <div style="
                position: absolute;
                top: -4px;
                left: 0;
                width: 0;
                height: 0;
                border-left: 30px solid transparent;
                border-right: 30px solid transparent;
                border-top: 30px solid #333;
            "></div>
            <div style="
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 0;
                border-left: 30px solid transparent;
                border-right: 30px solid transparent;
                border-bottom: 30px solid #333;
            "></div>
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 2px;
                height: 30px;
                background: #333;
                animation: sandFlow 3s ease-in-out;
            "></div>
        </div>
        <style>
            @keyframes turnHourglass {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(180deg); }
            }
            @keyframes sandFlow {
                0% {
                    transform: translate(-50%, -50%) scaleY(1);
                    opacity: 1;
                }
                50% {
                    transform: translate(-50%, 0%) scaleY(0.5);
                    opacity: 0.5;
                }
                100% {
                    transform: translate(-50%, 50%) scaleY(1);
                    opacity: 0;
                }
            }
        </style>
    `;
}