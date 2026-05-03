import useConversationStore from "@/stores/useConversationStore";
import Action from "./Action";
import { ToolName } from "@/lib/tools/tools-handling";
export default function RecommendedActions() {
  const { recommendedActions } = useConversationStore();

  const formatName = (action: string) => {
    const formatted = action.replace(/_/g, " ");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <div className="flex gap-2">
      {recommendedActions.map((action) => (
        <Action
          key={action.name}
          functionName={action.name as ToolName}
          name={formatName(action.name)}
          parameters={action.parameters}
        />
      ))}
    </div>
  );
}

export default function RecommendedActions({ className = "" }: RecommendedActionsProps) {
  const titleClassName = "text-black text-md font-medium mb-2";
  return (
    <div className={`p-4 pb-0 w-full bg-[#F7F7F8] rounded-lg ${className}`}>
      <div className="flex flex-1 flex-col overflow-y-scroll h-full p-4 pb-0">
        <h2 className={titleClassName}>Recommended actions</h2>
        <RecommendedActions />
      </div>
    </div>
  );
}