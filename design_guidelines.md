# Baccarat Waitlist Design Guidelines

## Design Approach
**Reference-Based**: Luxury casino aesthetic combining PrizePicks's bold visual energy with SIGNVL's premium elegance, enhanced with iOS glassmorphism and baccarat sophistication.

## Color Palette

### Dark Mode Primary (Casino Luxury)
- **Background Base**: 15 8% 8% (Deep charcoal, casino table felt inspired)
- **Background Elevated**: 15 8% 12% (Subtle lift for cards/sections)
- **Primary Accent**: 142 76% 36% (Rich emerald green - baccarat table felt)
- **Gold Accent**: 45 93% 58% (Luxurious gold for premium CTAs and highlights)
- **Text Primary**: 0 0% 98% (Crisp white for headers)
- **Text Secondary**: 0 0% 70% (Muted for body text)

### Supporting Colors
- **Success State**: 142 76% 36% (Emerald green)
- **Error State**: 0 84% 60% (Elegant red)
- **Border Subtle**: 0 0% 20% (Glass borders)
- **Overlay**: 0 0% 0% at 60% opacity (Modal/glass overlays)

## Typography

### Font Families
- **Primary (Display/Headers)**: 'Playfair Display' - Sophisticated serif for luxury headlines
- **Secondary (Body/UI)**: 'Inter' - Clean sans-serif for readability and iOS feel
- Load via Google Fonts CDN

### Type Scale
- **Hero Display**: text-6xl md:text-7xl, font-bold, tracking-tight (Playfair)
- **Section Headers**: text-4xl md:text-5xl, font-semibold (Playfair)
- **Subheadings**: text-xl md:text-2xl, font-medium (Inter)
- **Body Text**: text-base md:text-lg, font-normal, leading-relaxed (Inter)
- **Small Text/Labels**: text-sm, font-medium, tracking-wide, uppercase (Inter)

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 24** for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-4 to gap-8

### Grid Structure
- **Max Container**: max-w-7xl mx-auto px-6 lg:px-8
- **Forms**: max-w-2xl for optimal input width
- **Content Blocks**: max-w-4xl for readable text sections

## Component Library

### iOS Glassmorphism Cards
- Background: backdrop-blur-xl with bg-white/10 dark overlay
- Border: border border-white/20
- Shadow: shadow-2xl with subtle glow
- Rounded: rounded-2xl to rounded-3xl
- Padding: p-8 to p-12

### Premium Form Elements
- **Input Fields**: 
  - Dark background (bg-white/5)
  - Glass border (border-white/20)
  - Focus state: emerald glow ring-2 ring-emerald-500/50
  - Rounded: rounded-xl
  - Padding: px-4 py-3
  
- **Select Dropdowns**:
  - Custom styled with iOS-like appearance
  - Smooth dropdown animations
  - Glass effect matching inputs

- **Primary CTA Button**:
  - Gold gradient background (from-yellow-500 to-yellow-600)
  - Bold text with letter-spacing
  - Hover: Lift with shadow and subtle scale (hover:scale-105)
  - Rounded: rounded-full
  - Padding: px-8 py-4

- **Secondary Button**:
  - Glass border variant
  - Emerald green accent on hover
  - backdrop-blur background

### Baccarat Card Elements
- Animated card flip reveals
- 3D perspective transforms (perspective-1000)
- Elegant shadow effects for depth
- Gold foil accents on card edges

### Status Indicators
- **Limited Spots Badge**: Pulsing red dot with "Only X spots left"
- **Success Rate Display**: Large percentage with emerald highlighting
- **Member Count**: Animated counter with "+1000 Elite Members"

## Page Structure

### Hero Section (70vh to 90vh)
- **Background**: Full-screen baccarat table image (from provided assets) with dark gradient overlay
- **Layout**: Centered content with glassmorphic card container
- **Elements**:
  - Playfair Display hero headline with gold accent words
  - Subheading emphasizing exclusivity
  - Animated card visuals (subtle floating animation)
  - Primary CTA with glow effect

### Waitlist Form Section
- **Glass Card Container**: Centered, elevated with premium shadow
- **Form Fields** (in order):
  - Full Name (required)
  - Email (required with validation)
  - Phone with international selector (iOS-style dropdown)
  - Baccarat Experience Level (Beginner/Intermediate/Advanced/Pro)
  - Referral Code (optional field)
- **Submit Button**: Full-width gold gradient CTA
- **Privacy Notice**: Small text below form with emerald checkmark icon

### Benefits/Features Section
- **3-column grid** on desktop (stack on mobile)
- **Glass feature cards** with:
  - Baccarat-related icons (cards, chips, table)
  - Bold stat or benefit headline
  - Supporting description text
- **Elements**: "99% Win Rate", "24/7 VIP Support", "Exclusive Strategies"

### Social Proof Section
- **Testimonial carousel** (2-3 slides)
- **Member avatars** in overlapping arrangement
- **Trust indicators**: "1000+ Elite Players", App Store rating mockup

### Footer
- **Dark elevated background**
- **Two-column layout**: Quick links + Contact/Social
- **Elements**: Logo, navigation links, social icons, legal links
- **Already Member?** CTA link to member area

## Images

### Hero Background
- **Image**: Luxury baccarat table with cards and chips (use provided casino table asset)
- **Treatment**: Dark gradient overlay (black from top 50% opacity to transparent)
- **Position**: background-cover with center positioning

### Decorative Elements
- **Floating Card Graphics**: Use provided card images with CSS animations (translateY and rotate)
- **Chip Accents**: Scatter chips subtly in corners with low opacity
- **Pattern Overlay**: Subtle card suit pattern at 5% opacity in background sections

## Animations

### Micro-Interactions (iOS-inspired)
- **Input Focus**: Smooth emerald glow animation (300ms ease)
- **Button Hover**: Subtle lift (translateY -2px) with shadow expansion
- **Card Reveals**: Staggered fade-in with slide-up (delay increments of 100ms)
- **Success State**: Gentle bounce with confetti-like particle effect

### Hero Animations
- **Card Float**: Subtle continuous floating (translateY 20px, 3s ease-in-out infinite)
- **Gradient Shift**: Slow background gradient movement
- **Text Reveal**: Fade-in with slide-up on page load

### Form Validation
- **Error Shake**: Horizontal shake animation (300ms)
- **Success Checkmark**: Emerald checkmark with scale-in animation
- **Loading State**: Spinning gold ring indicator

## Firebase Integration Points

### Form Submission Flow
- Validate all fields client-side before submission
- Show loading state on submit button (disable + spinner)
- Send data to Firebase Firestore collection: 'waitlist-signups'
- Display success screen with confirmation message
- Implement email verification trigger (Firebase Function)

### Data Structure
```
{
  fullName, email, phone, experienceLevel, 
  referralCode, timestamp, status: 'pending'
}
```

## Mobile Optimization

- **iOS Safe Areas**: Account for notch with pb-safe
- **Touch Targets**: Minimum 44px height for all interactive elements
- **Single Column**: Stack all multi-column layouts on mobile
- **Form Inputs**: Full-width with generous padding for thumb typing
- **Bottom Sheet Modals**: For success confirmations (iOS native feel)

## Accessibility

- High contrast ratios (WCAG AAA where possible)
- Form labels with proper associations
- Error messages with aria-live regions
- Keyboard navigation support
- Focus visible states with emerald ring