
        // 工具提示啟用
        var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // 取消點擊a連結的預設行為
        let a = document.querySelectorAll("a");
        a.forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
            });
        });