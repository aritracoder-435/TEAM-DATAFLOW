type NudgeCardProps = {
  nudge?: string
  scheduledTime?: string
  onTakeBreak?: () => void
}

export default function NudgeCard({ nudge, scheduledTime, onTakeBreak }: NudgeCardProps) {
  function takeBreak() {
    if (onTakeBreak) {
      onTakeBreak()
    }
    alert("Break started. Drink water and stretch!")
  }

  return (
    <div className="bg-green-100 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">Next Nudge</h2>

      <p className="text-gray-600 mb-4">
        {nudge ?? "Fetching your next suggestion..."}
      </p>

      {scheduledTime && (
        <p className="text-sm text-gray-500 mb-3">
          Scheduled for {scheduledTime}
        </p>
      )}

      <div className="w-full bg-green-200 h-2 rounded">
        <div className="bg-green-500 h-2 w-1/2 rounded"></div>
      </div>

      <button
        onClick={takeBreak}
        className="mt-6 w-full bg-white py-3 rounded-lg font-semibold"
      >
        Take Break Now →
      </button>
    </div>
  )
}