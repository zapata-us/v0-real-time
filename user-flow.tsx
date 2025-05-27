import { SiteLayout } from "@/components/site-layout"
import { GlassContainer } from "@/components/glass-container"
import { ArrowRight } from "lucide-react"

export default function UserFlow() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-8 mt-[13%]">
        <h1 className="text-3xl font-bold text-white mb-8">User Flows</h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Shopping Flow */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-6">Shopping User Flow</h2>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <FlowStep number="1" title="Homepage" description="User lands on homepage" />
              <FlowArrow />
              <FlowStep number="2" title="Collection" description="User browses watch collection" />
              <FlowArrow />
              <FlowStep number="3" title="Filtering" description="User filters by brand, price, etc." />
              <FlowArrow />
              <FlowStep number="4" title="Product" description="User views product details" />
              <FlowArrow />
              <FlowStep number="5" title="Add to Cart" description="User adds watch to cart" />
              <FlowArrow />
              <FlowStep number="6" title="Checkout" description="User completes purchase" />
            </div>
          </GlassContainer>

          {/* Account Creation Flow */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-6">Account Creation Flow</h2>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <FlowStep number="1" title="Register" description="User clicks register button" />
              <FlowArrow />
              <FlowStep number="2" title="Form" description="User fills registration form" />
              <FlowArrow />
              <FlowStep number="3" title="Verification" description="User verifies email" />
              <FlowArrow />
              <FlowStep number="4" title="Dashboard" description="User accesses account dashboard" />
            </div>
          </GlassContainer>

          {/* Brand Exploration Flow */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-6">Brand Exploration Flow</h2>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <FlowStep number="1" title="Brands Page" description="User views brand directory" />
              <FlowArrow />
              <FlowStep number="2" title="Brand Page" description="User selects specific brand" />
              <FlowArrow />
              <FlowStep number="3" title="Collections" description="User explores brand collections" />
              <FlowArrow />
              <FlowStep number="4" title="Products" description="User views brand products" />
            </div>
          </GlassContainer>

          {/* Checkout Flow */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-6">Checkout Flow</h2>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <FlowStep number="1" title="Cart" description="User reviews cart items" />
              <FlowArrow />
              <FlowStep description="User reviews cart items" />
              <FlowArrow />
              <FlowStep number="2" title="Shipping" description="User enters shipping details" />
              <FlowArrow />
              <FlowStep number="3" title="Payment" description="User selects payment method" />
              <FlowArrow />
              <FlowStep number="4" title="Review" description="User reviews order details" />
              <FlowArrow />
              <FlowStep number="5" title="Confirmation" description="User receives order confirmation" />
            </div>
          </GlassContainer>
        </div>
      </div>
    </SiteLayout>
  )
}

function FlowStep({ number, title, description }) {
  return (
    <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg text-center w-full md:w-auto">
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
        {number}
      </div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-white/60 text-xs">{description}</p>
    </div>
  )
}

function FlowArrow() {
  return (
    <div className="flex justify-center w-full md:w-auto">
      <div className="hidden md:block">
        <ArrowRight className="text-white/40 h-5 w-5" />
      </div>
      <div className="block md:hidden h-4 w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/40 h-5 w-5 rotate-90"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
    </div>
  )
}
