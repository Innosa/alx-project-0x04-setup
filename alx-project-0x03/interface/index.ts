interface PageRouteProps {
  pageRoute: string
}

interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

interface LayoutProps {
  children: ReactNode;
}

