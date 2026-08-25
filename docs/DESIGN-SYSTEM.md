# Ammora design system v0.1

## Brand foundation

| Token | Value | Role |
|---|---|---|
| `Aurora Violet` | `#7938FB` | Brand energy, gradient start |
| `Liquidity Blue` | `#666DFB` | Primary brand and status |
| `Flow Cyan` | `#49C9F4` | Focus, connected state, gradient bridge |
| `Aurora Mint` | `#66F3AC` | Positive status, gradient end |
| `Midnight` | `#050813` | Deep background |
| `Ink` | `#08101F` | Primary text and inverse surface |
| `Warm White` | `#F7F6F4` | Page background |

브랜드 gradient는 `Aurora Violet → Liquidity Blue → Flow Cyan → Aurora Mint` 순서로만 사용한다. 모든 색을 개별 장식으로 흩뿌리지 않고 logo, display accent, primary action처럼 시선이 모이는 지점에 제한한다.

## Typography

- Display: `Genos`, weight 500, letter spacing -2%. Hero와 waitlist title에만 사용한다.
- Body: `Manrope`, weight 400–700. label, input, status, 설명에 사용한다.
- Hero는 Genos의 넓은 구조를 살리되 line-height `0.83–0.85`, letter-spacing `-0.047em`을 사용한다.
- 본문 최소 크기는 12px, form label은 11px 이상을 유지한다.

## Semantic usage

- Page: `Warm White`
- Primary text: `Ink`
- Inverse/card surface: `Ink`
- Focus: `Flow Cyan`
- Positive/beta: `Aurora Mint`
- Primary CTA: three-stop action gradient (`Violet → Blue → Cyan`)
- Disclosure status는 색에만 의존하지 않고 텍스트를 항상 함께 표시한다.

## Shape and layout

- Control radius: 16px
- Card radius: 32px desktop / 24px mobile
- Pill: 999px
- Desktop grid: 603px hero copy + 462px form card
- Mobile: copy와 form을 한 열로 쌓는다.
- Mobile status chips: 한 줄을 유지하고 viewport를 넘으면 horizontal scroll로 이어진다.
- Mobile service facts: cyan dot 구분자를 포함한 한 줄을 유지한다.
- Mobile hero title: 의미 단위 2줄, gradient accent 1줄을 유지하며 34–42px 범위에서 반응형 축소한다.

## Interactive background

- 전달된 aurora dot 이미지를 viewport 전체에 `cover`로 배치한다.
- 기본 이미지 opacity는 `30%`다.
- fine pointer 환경에서 반경 300px spotlight가 pointer를 따라간다.
- spotlight 중앙의 합성 opacity는 `80%`, 가장자리에서는 기본값 `30%`로 감쇠한다.
- touch/coarse pointer와 reduced motion 환경에서는 기본 30% 배경만 유지한다.

## Waitlist content rule

Form card에는 다음만 둔다.

1. `Join the waitlist`
2. `Wallet and email required.`
3. Wallet control
4. Email field
5. Primary CTA
6. 한 줄짜리 transaction/updates notice

서비스 설명, 기술 지표, audit/deployment 상태는 form card가 아니라 hero 영역에서만 보여준다.
