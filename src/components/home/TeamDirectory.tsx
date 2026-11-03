import TeamDirectoryFilters from './TeamDirectoryFilters'
import TeamSearch from './TeamSearch'

export default function TeamDirectory() {
    return (
        <div className="flex flex-row justify-between">
            <TeamDirectoryFilters/>
            <TeamSearch/>
        </div>
    )
}