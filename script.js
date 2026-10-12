```javascript
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const nitroDialog = document.getElementById("nitroDialog");
    const profileDialog = document.getElementById("profileDialog");
    const nitroButton = document.getElementById("nitroButton");
    const profileButton = document.getElementById("profileButton");
    const startButton = document.getElementById("startButton");
    const closeNitro = document.getElementById("closeNitro");
    const closeProfile = document.getElementById("closeProfile");
    const profileOk = document.getElementById("profileOk");
    const nitroForm = document.getElementById("nitroForm");
    const nitroCode = document.getElementById("nitroCode");
    const nitroMessage = document.getElementById("nitroMessage");
    const toast = document.getElementById("toast");

    let toastTimer;

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("visible");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("visible");
        }, 3200);
    }

    function openDialog(dialog) {
        if (!dialog) return;

        if (typeof dialog.showModal === "function") {
            dialog.showModal();
        }
    }

    function closeDialog(dialog) {
        if (dialog && dialog.open) {
            dialog.close();
        }
    }

    nitroButton.addEventListener("click", () => {
        nitroMessage.textContent =
            "Aktywacja premium zostanie uruchomiona po skonfigurowaniu serwera.";
        openDialog(nitroDialog);
    });

    profileButton.addEventListener("click", () => {
        openDialog(profileDialog);
    });

    closeNitro.addEventListener("click", () => {
        closeDialog(nitroDialog);
    });

    closeProfile.addEventListener("click", () => {
        closeDialog(profileDialog);
    });

    profileOk.addEventListener("click", () => {
        closeDialog(profileDialog);
    });

    startButton.addEventListener("click", () => {
        document.getElementById("community").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        showToast("Witaj w Nexus! ✨ Budujemy Twoją społeczność.");
    });

    // Kliknięcie przyciemnionego tła zamyka okno.
    [nitroDialog, profileDialog].forEach((dialog) => {
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) {
                closeDialog(dialog);
            }
        });
    });

    // Na razie nie aktywujemy kodu w przeglądarce.
    // Weryfikację wykonamy później na bezpiecznym backendzie.
    nitroForm.addEventListener("submit", (event) => {
        event.preventDefault();

        nitroMessage.textContent =
            "System aktywacji nie jest jeszcze podłączony. Twoje premium nie zostało zmienione.";

        nitroCode.value = "";

        showToast("Aktywacja Nitro będzie dostępna po konfiguracji serwera.");
    });

    // Zamknięcie okna klawiszem Escape obsługuje element <dialog>.
    // Usuwamy początkowy tekst po kliknięciu w pole kodu.
    nitroCode.addEventListener("input", () => {
        nitroMessage.textContent =
            "Kod zostanie zweryfikowany po uruchomieniu bezpiecznego systemu aktywacji.";
    });

    console.log("Nexus: interfejs został uruchomiony.");
});
```

