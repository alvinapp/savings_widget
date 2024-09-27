/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          white: "var(--color-text-white)",
          primary: "var(--color-text-primary)",
          info: "var(--color-text-info)",
          secondary: "var(--color-text-secondary)",
          neutral: "var(--color-text-neutral)",
          neutral2: "var(--color-text-neutral2)",
          accent: "var(--color-text-accent)",
          accent1: "var(--color-text-accent1)",
          accent2: "var(--color-text-accent2)",
          accent3: "var(--color-text-accent3)",
          success: "var(--color-text-success)",
          successSecondary: "var(--color-text-success-secondary)",
          successNeutral: "var(--color-text-success-neutral)",
          successTertiary: "var(--color-text-success-tertiary)",
          successAccent: "var(--color-text-success-accent)",
          warning: "var(--color-text-warning)",
          danger: "var(--color-text-danger)",
          title: "var(--color-text-title)",
          subtitle: "var(--color-text-subtitle)",
          inputDisabled: "var(--color-text-input-disabled)",
          iconTertiary: "var(--color-text-icon-tertiary)",
          iconSecondary: "var(--color-text-icon-secondary)",
          alvinBrown: "var(--color-text-alvin-brown)",
          alvinBrownFaded: "var(--color-text-alvin-brown-faded)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-background-base)",
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
          secondaryWithOpacity: "var(--color-background-secondary-withOpacity)",
          secondary1WithOpacity:
            "var(--color-background-secondary1-withOpacity)",
          secondary2WithOpacity:
            "var(--color-background-secondary2-withOpacity)",
          secondary3WithOpacity:
            "var(--color-background-secondary2-withOpacity)",
          success: "var(--color-background-success)",
          successNeutral: "var(--color-background-success-neutral)",
          successNeutralWithOpacity:
            "var( --color-background-success-neutral-withOpacity)",
          successWithOpacity:
            "var(--color-background-success-neutral-withOpacity)",
          successSecondary: "var(--color-background-success-secondary)",
          successTertiary: "var(--color-background-success-tertiary)",
          danger: "var(--color-background-danger)",
          warningWithOpacity: "var(--color-background-warning-withOpacity)",
          accent: "var(--color-background-accent)",
          accent2: "var(--color-background-accent2)",
          accent3: "var(--color-background-accent3)",
          accent4: "var(--color-background-accent4)",
          accent2WithOpacity: "var(--color-background-accent2-withOpacity)",
          accent3WithOpacity: "var(--color-background-accent3-withOpacity)",
          accent4WithOpacity: "var(--color-background-accent4-withOpacity)",
          neutral: "var(--color-background-neutral)",
          tertiary: "var(--color-background-tertiary)",
          tertiaryWithOpacity: "var(--color-background-tertiaryWithOpacity)",
          input: "var(--color-background-input)",
          inputButton: "var(--color-background-input-button)",
          divider: "var(--color-background-divider)",
          iconPrimary: "var(--color-background-icon-primary)",
          iconSecondary: "var(--color-background-icon-secondary)",
          iconTertiary: "var( --color-background-icon-tertiary)",
          path: "var( --color-background-path)",
          blackBg: "var( --color-background-black)",
          disabledBg: "var(--color-background-disabled)",
        },
      },
      outlineColor: {
        skin: {
          base: "var(--color-outline-base)",
          primary: "var(--color-outline-primary)",
          neutral: "var(--color-outline-neutral)",
          secondary: "var(--color-outline-secondary)",
          successNeutral: "var(--color-outline-success-neutral)",
        },
      },
      accentColor: {
        skin: {
          base: "var(--color-accent-base)",
          primary: "var(--color-accent-primary)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-outline-base)",
          primary: "var(--color-outline-primary)",
          neutral: "var(--color-outline-neutral)",
          secondary: "var(--color-outline-secondary)",
          accent: "var(--color-outline-accent)",
          successNeutral: "var(--color-outline-success-neutral)",
          successTertiary: "var(--color-outline-success-tertiary)",
          danger: "var(--color-outline-danger)",
        },
      },
      fontFamily: {
        custom: "'NeueMontreal', sans-serif",
        primary: "'NeueMontreal', sans-serif",
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
        addIncomeBg:
          "url('client/assets/images/budgets-insights/addincomebg.svg')",
        splitBudgetBg:
          "url('client/assets/images/budgets-insights/budgetsplitbg.svg')",
        rainyDayFund:
          "url('https://images.unsplash.com/photo-1508698308649-689249ec5455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDcxNTg0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
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
        input: "0 1px 6px -0.5px #9BC1D0",
        knob: "0 2px 6px 0 #C3C3C3;",
        budgetButton:
          "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 1px 8px -1px #C3C3C3",
      },
    },
    fontSize: {
      xxxxxs: ".555rem",
      xxxxs: ".619rem",
      xxxs: ".625rem",
      xxs: ".655rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1.5xl": "1.375rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
};
