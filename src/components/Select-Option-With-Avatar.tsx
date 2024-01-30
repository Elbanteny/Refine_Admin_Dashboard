import CustomAvatar from "./Custom-Avatar"
import { Text } from "./Text"

type Props = {
    avatarUrl?: string,
    name: string,
    shape?: "square" | "circle"
}

const SelectOptionWithAvatar = ({ avatarUrl, name, shape }: Props) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}
        >
            <CustomAvatar shape={shape} name={name} src={avatarUrl} />
            <Text>{name}</Text>
        </div>
    )
}

export default SelectOptionWithAvatar