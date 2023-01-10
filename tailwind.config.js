/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          primary: "var(--color-text-primary)",
          neutral: "var(--color-text-neutral)",
          success: "var(--color-text-success)",
          title: "var(--color-text-title)",
          subtitle: "var(--color-text-subtitle)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-background-base)",
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
          secondaryWithOpacity: "var(--color-background-secondary-withOpacity)",
          secondary1WithOpacity: "var(--color-background-secondary1-withOpacity)",
          accent: "var(--color-background-accent)",
          neutral: "var(--color-background-neutral)",
          tertiary: "var(--color-background-tertiary)",
        },
      },
      outlineColor: {
        skin: {
          primary: "var(--color-outline-primary)",
          neutral: "var(--color-outline-neutral)",
          secondary: "var(--color-outline-secondary)",
        },
      },
      fontFamily: {
        workSans: "'Work Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
      spacing: {
        0.5: "0.125rem",
        2.5: "0.625rem",
        3.5: "0.9375rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        13: "3.1875rem",
        18: "4.5rem",
        23: "5.5rem",
        100: "30rem",
        130: "33.5rem",
      },
      letterSpacing: {
        listtile_subtitle: "0.013125em",
        progress_label: "0.03125em",
        paragraph: "0.03125em",
        title: "0.009375em",
        subtitle: "0.025em",
        longtext: "0.066875em",
        longest_text: "0.075em",
        tab_text: "0.00625em",
      },
      backgroundImage: {
        cardOverlay: "url('client/assets/images/background-overlay.webp')",
        connectSuccessBg: "url('client/assets/images/connect-success-bg.svg')",
        overviewBg: "url('client/assets/images/savings/overviewbg.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "120%": "120%",
      },
      boxShadow: {
        card: "1px 1px 3px 2px rgba(0, 0, 0, 0.05)",
        button: "0 2px 4px -1px #9BC1D0, 0 8px 16px -1px #9BC1D0",
      },
    },
    fontSize: {
      xxxxs: ".619rem",
      xxxs: ".625rem",
      xxs: ".655rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
};
