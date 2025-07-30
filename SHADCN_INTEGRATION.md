# shadcn/ui Integration

This project has been successfully integrated with [shadcn/ui](https://ui.shadcn.com/) to provide a modern, accessible, and customizable component library.

## What's Been Added

### 1. Core Dependencies
- `@radix-ui/react-slot` - For component composition
- `@radix-ui/react-separator` - For separator components
- `class-variance-authority` - For component variants
- `clsx` - For conditional classes
- `tailwind-merge` - For merging Tailwind classes
- `tailwindcss-animate` - For animations

### 2. Configuration Files
- `components.json` - shadcn/ui configuration
- `lib/utils.ts` - Utility functions including the `cn` function
- Updated `tailwind.config.js` with shadcn/ui theme
- Updated `tsconfig.json` with path mapping

### 3. UI Components
- `components/ui/button.tsx` - Button component with variants
- `components/ui/card.tsx` - Card components (Card, CardHeader, CardTitle, etc.)
- `components/ui/badge.tsx` - Badge component
- `components/ui/separator.tsx` - Separator component

### 4. Enhanced Homepage
The homepage (`app/page.tsx`) has been updated to:
- Use shadcn/ui components while preserving all existing content
- Add enhanced styling with shadcn/ui design tokens
- Include a sticky header with backdrop blur
- Add a fixed CTA banner at the bottom
- Use proper semantic sections with background colors

### 5. Enhanced LandingHero Component
The `LandingHero` component has been enhanced with:
- shadcn/ui Button component
- Badge component for the sub-heading
- Card components for stats and image container
- Updated color tokens to use shadcn/ui design system

## Design System

The project now uses shadcn/ui's design tokens:
- `background` - Main background color
- `foreground` - Main text color
- `primary` - Primary brand color
- `secondary` - Secondary color
- `muted` - Muted text and backgrounds
- `accent` - Accent color
- `destructive` - Error/danger color
- `border` - Border colors
- `input` - Input field colors
- `ring` - Focus ring colors

## Usage

### Adding New shadcn/ui Components

To add new components, you can use the shadcn/ui CLI or manually create them following the pattern in the `components/ui/` directory.

### Using Components

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Example usage
<Button variant="default" size="lg">
  Click me
</Button>

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content here
  </CardContent>
</Card>

<Badge variant="secondary">Badge</Badge>
```

## Benefits

1. **Consistency** - All components follow the same design system
2. **Accessibility** - Built-in accessibility features
3. **Customization** - Easy to customize with CSS variables
4. **Type Safety** - Full TypeScript support
5. **Performance** - Optimized for performance
6. **Maintainability** - Clean, well-documented code

## Next Steps

1. Continue enhancing other components with shadcn/ui
2. Add more shadcn/ui components as needed
3. Customize the design tokens to match your brand
4. Consider adding dark mode support

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/) 